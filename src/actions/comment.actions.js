import axios from 'axios';
import config from '../config';
import * as actionTypes from './types';


export const createCommentSuccess = comment => ({
  type: actionTypes.CREATE_COMMENT_SUCCESSFUL,
  comment
});

export const loadCommentReplySuccess = (response, commentId) => ({
  type: actionTypes.LOAD_COMMENT_REPLIES_SUCCESSFUL,
  commentReplies: response,
  commentId,
});

export const commentError = error => ({
  type: actionTypes.COMMENT_ERRORS,
  error
});

export const deleteCommentSuccess = comment => ({
  type: actionTypes.DELETE_COMMENT_SUCCESSFUL, comment
});

export const updateCommentSuccess = comment => ({
  type: actionTypes.UPDATE_COMMENT_SUCCESSFUL, comment
});


export const createCommentReplySuccess = (reply, commentId) => ({
  type: actionTypes.CREATE_COMMENT_REPLY_SUCCESSFUL,
  reply,
  commentReply: reply,
  commentId
});


export const deleteCommentReplySuccess = (reply, commentId) => ({
  type: actionTypes.DELETE_COMMENT_REPLY_SUCCESSFUL,
  reply,
  commentReply: reply,
  commentId
});

export const updateCommentReplySuccess = (reply, commentId) => ({
  type: actionTypes.UPDATE_COMMENT_REPLY_SUCCESSFUL,
  reply,
  commentReply: reply,
  commentId
});

export const loadComments = articleComments => dispatch => axios(
  `${config.apiUrl}/articles/${articleComments.articleSlug}/comments?page=${articleComments.page}`
)
  .then((res) => {
    dispatch({
      type: actionTypes.LOAD_COMMENT_SUCCESSFUL,
      comments: res.data,
    });
  }).catch((error) => {
    dispatch(commentError({
      status: error.response.status,
      data: error.response.data
    }));
  });

export const createComment = comment => dispatch => axios.post(
  `${config.apiUrl}/articles/${comment.slug}/comments`, { comment }
)
  .then((res) => {
    dispatch(createCommentSuccess(res.data));
  })
  .catch((error) => {
    dispatch(commentError({
      status: error.response.status,
      data: error.response.data
    }));
  });

export const deleteComment = comment => dispatch => axios.delete(
  `${config.apiUrl}/articles/${comment.articleSlug}/comments/${comment.body.id}`,
  { comment }
)
  .then(() => {
    dispatch(deleteCommentSuccess(comment.body));
  })
  .catch((error) => {
    dispatch(commentError({
      status: error.response.status,
      data: error.response.data
    }));
  });

export const updateComment = comment => dispatch => axios.put(
  `${config.apiUrl}/articles/${comment.articleSlug}/comments/${comment.id}`,
  { comment }
)
  .then(() => {
    dispatch(updateCommentSuccess(comment));
  })
  .catch((error) => {
    dispatch(commentError({
      status: error.response.status,
      data: error.response.data
    }));
  });


// for comment replies

export const loadCommentReplies = commentId => dispatch => axios(
  `${config.apiUrl}/comments/${commentId}/replies`
)
  .then((res) => {
    dispatch(loadCommentReplySuccess(Object.values(res.data.replies),
      commentId));
  })
  .catch((error) => {
    dispatch(commentError({
      status: error.response.status,
      data: error.response.data
    }));
  });

export const createCommentReply = reply => dispatch => axios.post(
  `${config.apiUrl}/comments/${reply.commentId}/replies`, { reply }
)
  .then((res) => {
    dispatch(createCommentReplySuccess(res.data.reply, reply.commentId));
  })
  .catch((error) => {
    dispatch(commentError({
      status: error.response.status,
      data: error.response.data
    }));
  });

export const deleteCommentReply = reply => dispatch => axios.delete(
  `${config.apiUrl}/comments/${reply.comment.id}/replies/${reply.commentReply.id}`,
  { reply }
)
  .then(() => {
    dispatch(deleteCommentReplySuccess(reply.commentReply, reply.comment.id));
  })
  .catch((error) => {
    dispatch(commentError({
      status: error.response.status,
      data: error.response.data
    }));
  });

export const updateCommentReply = reply => dispatch => axios.put(
  `${config.apiUrl}/comments/${reply.comment.id}/replies/${reply.commentReplyId}`,
  { reply }
)
  .then((res) => {
    dispatch(updateCommentReplySuccess(res.data.reply, reply.comment.id));
  })
  .catch((error) => {
    dispatch(commentError({
      status: error.response.status,
      data: error.response.data
    }));
  });
