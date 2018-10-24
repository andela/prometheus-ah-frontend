import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'is-empty';

import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { loadComments } from '../../actions/comment.actions';

/**
 * @class ArticleComments
 * @description Article Comments Component
 * @extends {Component}
 * @param {object} prevProps - inputs from article form
 * @param {object} event - inputs from article form
 */
export class ArticleComments extends Component {
  state = {
    commentsArray: [],
    commentPage: 1,
  }


  /**
   * @function loadMoreComments
   * @description loads more comments
   *
   * @param {object} event - inputs from article form
   * @returns {void}
   */
  loadMoreComments = (event) => {
    event.preventDefault();
    const {
      article, comments, loadCommentsAction
    } = this.props;

    const {
      commentPage,
    } = this.state;

    if (commentPage < comments.paginationMeta.pageCount) {
      const articleComments = {
        articleSlug: article.slug,
        page: commentPage + 1,
      };
      loadCommentsAction(articleComments);

      this.setState({
        commentsArray: comments.comments,
        commentPage: comments.paginationMeta.currentPage + 1,
      });
    }
  }

  componentDidUpdate = (prevProps) => {
    const { comments } = this.props;
    if (comments !== prevProps.comments) {
      const commentsArray = comments.comments;
      this.setState({
        commentsArray,
      });
    }
  }

  /**
   * @memberof ArticleComments
   *
   * @returns {JSX} JSX representation of component
   *
   * @description Render the JSX template
   */
  render() {
    const {
      article,
      user,
      totalCount,
      paginationMeta,
    } = this.props;
    const {
      commentsArray,
    } = this.state;

    return (
      <div>
        <br />
        <div className="row">
          <div className="col">
            <h5>
              Comments &nbsp;
              <span id="commentsCount" className="comments-count">
                {totalCount}
              </span>
            </h5>
            <div>
              {
                isEmpty(user)
                  ? ''
                  : (
                    <CommentForm article={article} />
                  )
              }
              <br />
              <br />
            </div>
            <CommentList commentsArray={commentsArray} username={user.username} />
            <div>
              {
                (paginationMeta.currentPage < paginationMeta.pageCount)
                  ? (
                    <button type="submit" className="btn mx-auto" onClick={this.loadMoreComments}>
                      Load More....
                    </button>
                  )
                  : ''
              }
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

ArticleComments.propTypes = {
  article: PropTypes.shape({}),
  user: PropTypes.shape({}),
  comments: PropTypes.shape({}),
  loadCommentsAction: PropTypes.func.isRequired,
  totalCount: PropTypes.number,
  paginationMeta: PropTypes.instanceOf(Object),
};

const mapStateToProps = state => ({
  article: state.articleReducer.article,
  user: state.auth.user,
  comments: state.commentReducer.comments,
  totalCount: state.commentReducer.comments.paginationMeta.totalCount,
  paginationMeta: state.commentReducer.comments.paginationMeta,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  loadCommentsAction: loadComments,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(ArticleComments);
