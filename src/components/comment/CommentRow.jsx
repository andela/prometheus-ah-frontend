import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { bindActionCreators } from 'redux';

import CommentReplyList from './CommentReplyList';
import {
  createCommentReply,
  deleteComment,
  updateComment,
  loadComments,
  loadCommentReplies
} from '../../actions/comment.actions';

import CommentValidation from '../../validations/validateComment';

import userThumbnail from '../../images/paceholder.jpeg';


/**
 * @class CommentRow
 * @description Comment Row
 * @extends {Component}
 * @param {object} event - inputs from article form
 */
export class CommentRow extends Component {
  /**
   * @description - Class constructor
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      editBody: '',
      errors: {},
      editError: '',
      newReply: false,
      replies: [],
    };
  }

  /**
   * When react component is mounted
   * @returns {void}
   */
  componentDidMount() {
    const { loadCommentReplyAction, comment } = this.props;
    const commentId = comment.id;
    if (typeof commentId === 'number') {
      loadCommentReplyAction(commentId);
    }
  }

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

  onReplySubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      const { comment } = this.props;
      const { editBody } = this.state;
      this.setState({
        errors: {},
        editBody: '',
      });
      const reply = {
        commentId: comment.id,
        body: editBody,
      };

      const { createCommentReplyAction } = this.props;
      createCommentReplyAction(reply);

      this.setState({
        newReply: false,
      });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      const {
        article, comment
      } = this.props;
      const {
        editBody
      } = this.state;

      this.setState({
        errors: {},
        editBody: '',
        editing: false,
      });
      comment.body = editBody;

      const editedComment = {
        id: comment.id,
        articleSlug: article.slug,
        body: editBody,
        comment
      };
      const { updateCommentAction } = this.props;
      updateCommentAction(editedComment);
    }
  }

  handleCommentDelete = (event) => {
    event.preventDefault();
    const { article, comment } = this.props;
    const targetComment = {
      body: comment,
      articleSlug: article.slug,
    };
    const { deleteCommentAction } = this.props;
    deleteCommentAction(targetComment);
  }

  handleCommentEdit = (event) => {
    event.preventDefault();
    const { comment } = this.props;
    this.setState({
      editing: true,
      editBody: comment.body,
    });
  }

  handleCommentEditCancel = (event) => {
    event.preventDefault();
    this.setState({
      editing: false,
    });
  }

  handleCommentReply = (event) => {
    event.preventDefault();
    this.setState({
      newReply: true,
    });
  }

  handleReplyCancel = (event) => {
    event.preventDefault();
    this.setState({
      newReply: false,
    });
  }

  isValid = () => {
    const { editBody } = this.state;
    const comment = {
      body: editBody,
    };
    const { errors, isValid } = CommentValidation.commentValidate(comment);

    if (!isValid) {
      this.setState({
        errors,
      });
    }
    return isValid;
  }

  /**
   * @memberof CommentRow
   *
   * @returns {JSX} JSX representation of component
   *
   * @description Render the JSX template
   */
  render() {
    const {
      auth,
      comment,
      totalCount,
      username,
    } = this.props;

    let currentUser = {};

    if (comment.User) {
      currentUser = comment.User;
    } else {
      currentUser = comment.user;
    }
    const {
      newReply, editing, editError, editBody, replies
    } = this.state;

    return (
      <div>
        <div className="card card-inner">
          <div>
            {
              !editing
                ? (
                  <div className="row card-body">
                    <div className="col-2">
                      <img
                        src={currentUser.image ? currentUser.image : userThumbnail}
                        className="rounded-circle img img-fluid-comment"
                        alt="user-thumbnail"
                      />
                    </div>
                    <div className="col-10">
                      <div className="comment-body">
                        <p id="username">
                          <strong>{currentUser.username}</strong>
                          <span className="comment-span" id="timestamp">
                        &nbsp; -
                        &nbsp;
                            {moment(comment.createdAt).fromNow()}
                          </span>
                        </p>
                        <p>
                          {comment.body}
                        </p>
                        <p className="comment-span">
                          {
                            auth ? (
                              <button
                                type="button"
                                className="btn btn-link"
                                onClick={this.handleCommentReply}
                              >
                                Reply
                              </button>
                            ) : ''
                          }
                          <span id="threadCount" className="comment-span">{totalCount}</span>
                          - &nbsp;
                          <i className="mdi mdi-thumb-up-outline mr-3 align-top">
                            <span className="likes-num"> 30</span>
                          </i>
                        </p>
                        {
                          newReply
                            ? (
                              <div>
                                <form onSubmit={this.onReplySubmit}>
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
                                        className="form-control editBody"
                                        error={editError}
                                        label="editBody"
                                        name="editBody"
                                        value={editBody}
                                        onChange={this.onChange}
                                        placeholder="Reply this comment....."
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
                                          onClick={this.handleReplyCancel}
                                        >
                                        Cancel
                                        </button>
                                      </div>
                                      <div className="form-group col-auto">
                                        <button
                                          type="submit" id="submit" className="btn comment-btn"
                                        >
                                          Reply
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                                <br />
                              </div>
                            )
                            : ''
                        }
                        <div>
                          <CommentReplyList
                            replies={replies}
                            comment={comment}
                            username={username}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pull-right">
                      {(currentUser.username === username) ? (
                        <div className="menu-top-right dropleft">
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
                      {' '}

                    </div>
                  </div>
                )
                : (
                  <div>
                    <form onSubmit={this.onSubmit}>
                      <div className="form-row">
                        <div className="col-2 comment-thumbnail">
                          <img
                            src={userThumbnail}
                            className="rounded-circle float-right img img-fluid-reply"
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
                            placeholder="Edit your reply....."
                            field="editBody"
                            type="text"
                            id="editBody"
                            rows="2"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col float-right">
                          <button
                            type="submit"
                            id="submit"
                            className="btn comment-cancel-btn float-right"
                            onClick={this.handleCommentEditCancel}
                          >
                            Cancel
                          </button>
                        </div>
                        <div className="form-group col-1">
                          <button type="submit" id="submit" className="btn comment-btn float-right">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )
            }
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

CommentRow.propTypes = {
  createCommentReplyAction: PropTypes.func.isRequired,
  loadCommentReplyAction: PropTypes.func.isRequired,
  deleteCommentAction: PropTypes.func.isRequired,
  updateCommentAction: PropTypes.func.isRequired,
  comment: PropTypes.shape({}).isRequired,
  username: PropTypes.string,
  user: PropTypes.shape({}),
  auth: PropTypes.bool.isRequired,
  article: PropTypes.shape({}),
  reply: PropTypes.shape({}),
  totalCount: PropTypes.string,
};

const mapStateToProps = state => ({
  article: state.articleReducer.article,
  user: state.auth.user,
  auth: state.auth.isAuthenticated,
  reply: state.commentReducer.reply,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  createCommentReplyAction: createCommentReply,
  deleteCommentAction: deleteComment,
  updateCommentAction: updateComment,
  loadCommentsAction: loadComments,
  loadCommentReplyAction: loadCommentReplies,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(CommentRow);
