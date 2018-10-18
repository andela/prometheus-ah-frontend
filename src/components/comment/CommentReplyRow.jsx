import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { bindActionCreators } from 'redux';

import {
  deleteCommentReply,
  updateCommentReply,
} from '../../actions/comment.actions';
import userThumbnail from '../../images/paceholder.jpeg';

import CommentValidation from '../../validations/validateComment';

/**
 * @class SignUpForm
 */
export class CommentReplyRow extends Component {
  /**
   * @description - Class constructor
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      editError: '',
      editBody: '',
      errors: {},
    };
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onChange = (event) => {
    const { errors } = this.state;
    if (errors[event.target.id]) {
      const newErrors = Object.assign({}, errors);
      delete newErrors[event.target.id];
      this.setState({
        [event.target.id]: event.target.value, errors: newErrors
      });
    } else {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  }

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  onSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      const {
        comment, commentReply,
      } = this.props;
      const {
        editBody,
      } = this.state;
      this.setState({
        errors: {},
        editBody: '',
      });

      const editedReply = {
        commentReplyId: commentReply.id,
        comment,
        body: editBody,
      };
      const { updateCommentAction } = this.props;
      updateCommentAction(editedReply);

      this.setState({
        editing: false,
      });
    }
  }


  /**
   * delete an article
   *@param {*} event - takes the html event
   *@return {*} empty object
   */
  handleCommentDelete = (event) => {
    event.preventDefault();
    const { comment, commentReply } = this.props;
    const targetComment = {
      commentReply,
      comment,
    };
    const { deleteCommentAction } = this.props;
    deleteCommentAction(targetComment);
  }

  /**
   * delete an article
   *@param {*} event - takes the html event
   *@return {*} empty object
   */
  handleCommentEdit = (event) => {
    event.preventDefault();
    const { commentReply } = this.props;
    this.setState({
      editing: true,
      editBody: commentReply.body,
    });
  }

  /**
   * delete an article
   *@param {*} event - takes the html event
   *@return {*} empty object
   */
  handleCommentEditCancel = (event) => {
    event.preventDefault();
    this.setState({
      editing: false,
    });
  }

  /**
   * isValid
   * @returns {*} - state
   */
  isValid() {
    const { editBody } = this.state;
    const commentReply = {
      body: editBody,
    };
    const { errors, isValid } = CommentValidation.commentValidate(commentReply);

    if (!isValid) {
      this.setState({
        errors,
      });
    }
    return isValid;
  }

  /**
   *
   * @param {*} event
   * @returns {*} - comment reply html div
   */
  render() {
    const { commentReply, username } = this.props;
    let currentUser = {};

    if (commentReply.User) {
      currentUser = commentReply.User;
    } else {
      currentUser = commentReply.user;
    }

    const {
      editing, editError, editBody,
    } = this.state;
    return (
      <div>
        <hr />
        {
        !editing
          ? (
            <div className="row comment-reply-row">
              <div className="col-2">
                <img
                  src={currentUser.image ? currentUser.image : userThumbnail}
                  className="rounded-circle float-left img img-fluid-comment"
                  alt="user-thumbnail"
                />
              </div>
              <div className="col-10">
                <div className="comment-body">
                  <p id="username">
                    <strong>{currentUser.username}</strong>
                    <span className="comment-span" id="timestamp">
                      - &nbsp;
                      {moment(commentReply.createdAt).fromNow()}
                    </span>
                  </p>
                  <p>
                    {commentReply.body}
                  </p>
                  <p className="comment-span">
                &nbsp;
                    <i className="mdi mdi-thumb-up-outline mr-3 align-top">
                      <span className="likes-num"> 30</span>
                    </i>
                  </p>
                </div>
              </div>
              <div className="pull-right">
                {(currentUser.username === username) ? (
                  <div className="reply-menu-top-right dropleft">
                    <i className="mdi mdi-dots-vertical"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    />
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a
                        className="dropdown-item"
                        onClick={this.handleCommentEdit}
                        href="#"
                      >
                            Edit
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={this.handleCommentDelete}
                        href="#"
                      >
                            Delete
                      </a>
                    </div>
                  </div>
                ) : ''
                }

              </div>
              <br />
            </div>
          )
          : (
            <div>
              <form onSubmit={this.onSubmit}>
                <div className="form-row">
                  <div className="col-2 comment-thumbnail">
                    <img
                      src={userThumbnail}
                      className="rounded-circle float-right img img-fluid-reply-1"
                      alt="user-thumbnail"
                    />
                  </div>
                  <div className="form-group col-10">
                    <textarea
                      className="form-control"
                      error={editError}
                      label="editBody"
                      name="editBody"
                      value={editBody}
                      onChange={this.onChange}
                      placeholder="Leave a comment....."
                      field="editBody"
                      type="text"
                      id="editBody"
                      rows="2"
                    />
                  </div>
                </div>
                <div className="form-row float-right">
                  <div className="row float-right">
                    <div className="form-group col-auto">
                      <button
                        type="submit"
                        id="submit"
                        className="btn comment-cancel-btn float-right"
                        onClick={this.handleCommentEditCancel}
                      >
                    Cancel
                      </button>
                    </div>
                    <div className="form-group col-auto">
                      <button type="submit" id="submit" className="btn comment-btn">
                    Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <br />
            </div>
          )
        }
      </div>
    );
  }
}

CommentReplyRow.propTypes = {
  deleteCommentAction: PropTypes.func.isRequired,
  updateCommentAction: PropTypes.func.isRequired,
  commentReply: PropTypes.shape({}).isRequired,
  comment: PropTypes.shape({}).isRequired,
  reply: PropTypes.shape({}).isRequired,
  username: PropTypes.string,
};

const mapStateToProps = state => ({
  error: state.auth.error,
  auth: state.auth.isAuthenticated,
  username: state.auth.user.username,
  reply: state.commentReducer.reply,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  deleteCommentAction: deleteCommentReply,
  updateCommentAction: updateCommentReply,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(CommentReplyRow);
