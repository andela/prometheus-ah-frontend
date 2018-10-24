import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadComments } from '../../actions/comment.actions';

import CommentRow from './CommentRow';


/**
 * @class CommentList
 * @extends {Component}
 *
 * @description Displays the list of comments
 *
 */
export class CommentList extends Component {
  /**
   * @memberof CommentList
   *
   * @returns {JSX} JSX representation of component
   *
   * @description Render the JSX template
   */
  render() {
    const { username, commentsArray } = this.props;
    return (
      <div>
        <br />
        <div>
          {
            commentsArray.map(
              comment => (
                <CommentRow
                  key={comment.id}
                  comment={comment}
                  username={username}
                />
              )
            )}
        </div>
      </div>
    );
  }
}

CommentList.propTypes = {
  username: PropTypes.string,
  article: PropTypes.shape({}),
  commentsArray: PropTypes.instanceOf(Array),
};

const mapStateToProps = state => ({
  article: state.articleReducer.article,
  error: state.auth.error,
  auth: state.auth.isAuthenticated,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  loadCommentsAction: loadComments,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(CommentList);
