import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'is-empty';

import { createComment } from '../../actions/comment.actions';
import CommentValidation from '../../validations/validateComment';
import ErrorAlertNotification from '../common/ErrorAlertNotification';

import userThumbnail from '../../images/paceholder.jpeg';

/**
 * @class CommentForm
 *
 * @description Comment Form Component
 * @extends {Component}
 *
 * @param {*} event
 */
export class CommentForm extends Component {
  /**
   * @description - Class Constructor
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      article: {},
      body: '',
      errors: {},
      success: {},
      done: false,
      isLoading: false,
      error: '',
    };
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

  onSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      const { article, createCommentAction } = this.props;
      const { body } = this.state;

      this.setState({
        errors: {},
        body: '',
      });

      const newComment = {
        slug: article.slug,
        body,
      };

      createCommentAction(newComment);
    }
  }

  handleCloseError = () => {
    this.setState({
      error: '',
      errors: {}
    });
  };

  isValid = () => {
    const { errors, isValid } = CommentValidation.commentValidate(this.state);
    if (!isValid) {
      this.setState({
        errors,
        error: errors.body[0],
      });
    }
    return isValid;
  }

  /**
   * @memberof CommentForm
   *
   * @returns {JSX} JSX representation of component
   *
   * @description Render the JSX template
   */
  render() {
    const { error, body, errors } = this.state;

    return (
      <div>
        <hr />
        {
          !isEmpty(errors) && (<ErrorAlertNotification
            errors={errors.body[0]}
            onClick={this.handleCloseError}
          />
          )
        }
        <form onSubmit={this.onSubmit}>
          <div className="form-row form-row-comment">
            <div className="col-2 comment-thumbnail center-form-group-img">
              <img
                src={userThumbnail}
                className="rounded-circle float-right img img-fluid-comment"
                alt="user-thumbnail"
              />
            </div>
            <div className="form-group col-10">
              <textarea
                className="form-control"
                error={error}
                label="body"
                name="body"
                value={body}
                onChange={this.onChange}
                placeholder="Leave a comment....."
                field="body"
                type="text"
                id="body"
                rows="2"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col float-right">
              <button
                type="submit"
                id="submit"
                className="btn comment-btn float-right"
                onClick={this.onSubmit}
              >
                COMMENT
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  createCommentAction: PropTypes.func.isRequired,
  article: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  article: state.articleReducer.article,
  error: state.auth.error,
  auth: state.auth.isAuthenticated,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  createCommentAction: createComment,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(CommentForm);
