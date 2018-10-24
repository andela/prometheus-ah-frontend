import * as types from '../actions/types';

const initialState = {
  comments: { comments: [], paginationMeta: {} },
  comment: {},
  reply: {},
  commentReplies: [],
  allCommentReplies: [],
};
/**
 *
 * @param {object} state - InitialState
 * @param {object} action - Action Object
 *
 * @returns {object} state CurrentState
 */
export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_COMMENT_SUCCESSFUL:
      return {
        ...state,
        comments: {
          comments: [action.comment.comment,
            ...state.comments.comments],
          paginationMeta:
          Object.assign(state.comments.paginationMeta,
            { totalCount: state.comments.paginationMeta.totalCount + 1 })
        }
      };
    case types.UPDATE_COMMENT_SUCCESSFUL:
      return {
        ...state,
        comments: {
          comments:
          state.comments.comments.map(comment => (comment.id === action.comment.id
            ? action.comment.comment : comment)),
          paginationMeta: state.comments.paginationMeta
        }
      };

    case types.DELETE_COMMENT_SUCCESSFUL:
      return {
        ...state,
        comments: {
          comments:
          state.comments.comments.filter(comment => comment !== action.comment),
          paginationMeta:
          Object.assign(state.comments.paginationMeta,
            { totalCount: state.comments.paginationMeta.totalCount - 1 })
        }
      };
    case types.LOAD_COMMENT_SUCCESSFUL:
      return {
        ...state,
        comments: {
          comments:
          [...state.comments.comments, ...Object.values(action.comments.comments)],
          paginationMeta: action.comments.paginationMeta
        }
      };
    case types.LOAD_COMMENT_SUCCESS:
      return {
        ...state,
        comment: action.comment,
      };
    case types.LOAD_COMMENT_REPLIES_SUCCESSFUL:
      return {
        ...state,
        commentReplies: [...state.commentReplies, {
          replies: action.commentReplies,
          commentId: action.commentId,
          paginationMeta: action.paginationMeta,
        }],
      };
    case types.CREATE_COMMENT_REPLY_SUCCESSFUL:
      return {
        ...state,
        commentReplies: [
          ...state.commentReplies.map(
            allCommentReplies => (allCommentReplies.commentId === action.commentId
              ? {
                replies:
                  [...allCommentReplies.replies, action.commentReply],
                commentId: action.commentId
              }
              : { ...allCommentReplies })
          )
        ]
      };
    case types.UPDATE_COMMENT_REPLY_SUCCESSFUL:
      return {
        ...state,
        commentReplies: [
          ...state.commentReplies.map(
            allCommentReplies => (allCommentReplies.commentId === action.commentId
              ? {
                replies:
                  [...allCommentReplies.replies.filter(
                    reply => reply.id !== action.commentReply.id
                  ), action.commentReply],
                commentId: action.commentId
              }
              : { ...allCommentReplies })
          )
        ]
      };
    case types.DELETE_COMMENT_REPLY_SUCCESSFUL:
      return {
        ...state,
        commentReplies: [
          ...state.commentReplies.map(
            allCommentReplies => (
              allCommentReplies.commentId === action.commentId
                ? {
                  replies: [...allCommentReplies.replies.filter(
                    reply => reply.id !== action.commentReply.id
                  )],
                  commentId: action.commentId
                }
                : { ...allCommentReplies })
          )]
      };

    default:
      return state;
  }
}
