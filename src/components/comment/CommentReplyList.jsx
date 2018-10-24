import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CommentReplyRow from './CommentReplyRow';
import {
  loadCommentReplies
} from '../../actions/comment.actions';

/**
 * @class CommentReplyList
 * @extends {Component}
 *
 * @description Displays the list of replies to a comment
 *
 */
export class CommentReplyList extends Component {
  /**
   * @memberof CommentReplyList
   *
   * @returns {JSX} JSX representation of component
   *
   * @description Render the JSX template
   */
  render() {
    const { comment, commentReplies } = this.props;
    return (
      <div>
        <div>
          {
            commentReplies.map((replies) => {
              if (replies.commentId === comment.id) {
                return replies.replies.map(reply => (
                  <CommentReplyRow
                    key={reply.id}
                    commentReply={reply}
                    comment={comment}
                  />
                ));
              }
            })
          }
        </div>
      </div>
    );
  }
}

CommentReplyList.propTypes = {
  commentReplies: PropTypes.instanceOf(Array),
  comment: PropTypes.instanceOf(Object),
};

const mapStateToProps = state => ({
  commentReplies: state.commentReducer.commentReplies,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  loadCommentReplyAction: loadCommentReplies,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(CommentReplyList);
