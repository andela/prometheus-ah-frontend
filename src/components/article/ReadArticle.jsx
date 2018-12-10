import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import Article from '../../actions/articleActions';
import Loading from '../common/Loading';
import { getReports } from '../../actions/report.action';
import { showReportModal } from '../../actions/modal.action';
import { ArticleControlBtn, ReportBtn } from '../common/ArticleControlBtn';
import Modal from '../modals/Modal';
import Like from '../Like';
import ArticleComments from '../comment/ArticleComments';
import { loadComments } from '../../actions/comment.actions';

/**
 * class ReadArticlePage
 * @returns {Object} New article
 * @param {object} prevProps - inputs from article form
 * @param {object} article - inputs from article form
 */
export class ReadArticle extends Component {
  state = {
  };

  componentDidMount = () => {
    const {
      fetchSingleArticle,
      articleLikesCount,
      match,
      getUserReport,
      loadCommentsAction
    } = this.props;
    const articleComments = {
      articleSlug: match.params.slug,
      page: 1,
    };
    fetchSingleArticle(match.params.slug).then(res => getUserReport(res.data.article.id));
    loadCommentsAction(articleComments);
    fetchSingleArticle(match.params.slug);
    articleLikesCount(match.params.slug);
  }

  /**
   * @description sets the likes count
   *
   * @function getDerivedStateFromProps
   *
   * @param {object} nextProps
   * @param {object} state
   *
   * @returns {null} update the state
   */
  static getDerivedStateFromProps(nextProps, state) {
    const { alreadyChecked } = state;
    const { auth, likeStatus, match } = nextProps;
    likeStatus(match.params.slug);
    if (auth.isAuthenticated && !alreadyChecked) {
      return {
        alreadyChecked: true,
      };
    } else if (!auth.isAuthenticated) {
      return {
        alreadyChecked: false,
      };
    }
    return null;
  }

  onClick = () => {
    const {
      articleLikesCount, likeArticle, unlikeArticle, match
    } = this.props;
    return likeArticle(match.params.slug)
      .then((payload) => {
        if (payload.status === 200) {
          unlikeArticle(match.params.slug)
            .then(() => {
              articleLikesCount(match.params.slug);
            });
        }
        articleLikesCount(match.params.slug);
      });
  }

  /**
   * delete an article
   *@param {*} slug - takes the article slug
   *@return {*} empty object
   */
  handleDelete = (slug) => {
    const { deleteUserArticle, history } = this.props;
    deleteUserArticle(slug).then(() => {
      history.push('/');
    });
  }

  onDelete = () => {
    const { article } = this.props;
    return this.handleDelete(article.slug);
  }

  /**
   * render jsx
   * @returns {object} jsx
   */
  render() {
    const {
      article, count, auth, userLikeStatus, showReportModal1, user, reported
    } = this.props;
    if (!article) {
      return (
        <div className="read-article my-5">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }

    let likes;

    if (auth.isAuthenticated) {
      likes = userLikeStatus;
    }

    const message = encodeURIComponent(
      'Check out this article from Authors Haven'
    );

    const articleURL = encodeURIComponent(window.location.href);

    const twitterUrl = `https://twitter.com/intent/tweet?url=${articleURL}&text=${message}&hashtags=${encodeURIComponent('AuthorsHaven')}`; // eslint-disable-line

    const facebookUrl = `https://www.facebook.com/dialog/share?app_id=344596382778592&display=page&href=${articleURL}&redirect_uri=${articleURL}`; // eslint-disable-line

    const emailUrl = `mailto:?Subject=${message}${' Titled '}${ReactHtmlParser(article.title)}&body=${articleURL}`; // eslint-disable-line

    return (
      <div>
        <div className="read-article my-5">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <div className="article-title">
                <h1 className="title">{ReactHtmlParser(article.title)}</h1>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="mr-5 text-muted">{article.readingTime}</div>
                    <div className="text-muted mr-5">
                      {moment(article.createdAt).format('MMM D, YYYY')}
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-around align-items-start article-reactions-top"
                  >
                    <Like
                      iconClassName={likes
                        ? 'mdi mdi-thumb-up mr-3 align-top'
                        : 'mdi mdi-thumb-up-outline mr-3 align-top'
                    }
                      spanClassName="likes-num"
                      count={count}
                      onClick={this.onClick}
                    />
                    <a href={twitterUrl}><i className="mdi mdi-twitter mr-3" /></a>
                    <a href={facebookUrl}><i className="mdi mdi-facebook mr-3" /></a>
                    <a href={emailUrl} target="_blank" rel="noopener noreferrer">
                      <i className="mdi mdi-email mr-3" />
                    </a>
                    <i className="mdi mdi-bookmark" />
                  </div>
                </div>
                <div className="mt-3 description font-italic text-muted">
                  {ReactHtmlParser(article.description)}
                </div>
              </div>

              <div className="col-12 mt-5 col-lg-8 offset-lg-2">
                <div className="post-body">{ReactHtmlParser(article.body)}</div>
              </div>
              <div className="col-md-6 offset-md-2">
                {article.Tags.length >= 1 ? article.Tags.map(tag => (
                  <span className="btn tags" key={tag.name}>{tag.name}</span>
                )) : ''}
              </div>
              {user.userId === article.userId ? (
                <div>
                  <div className="col-md-3 align-self-center report-icon">
                    <div className="menu-top-right dropdown">
                      <i
                        className="mdi mdi-dots-horizontal"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <ArticleControlBtn
                          handleDelete={this.onDelete}
                          link={`/articles/${article.slug}/edit`}
                        />
                        {reported && reported.message
                          ? <ReportBtn showReportModal={showReportModal1} /> : ''}
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                <div>
                  {user.userId && reported && reported.message
                    ? (
                      <div>
                        <div className="col-md-3 align-self-center">
                          <div className="menu-top-right dropdown">
                            <i
                              className="mdi mdi-dots-horizontal"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            />
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <ReportBtn showReportModal={showReportModal1} />
                            </div>
                          </div>

                        </div>
                      </div>
                    ) : ''}
                </div>
              ) }
              <Modal article={article} articleSlug={article ? article.slug : ''} />
              <div className="col-12 col-md-9 offset-md-1 mt-4 col-lg-6 offset-lg-3 card-margin">
                <div className="shadow-lg border-0 card p-3 p-lg-4">
                  <div className="d-flex mb-3">
                    <img
                      src={article.User.image !== null
                        ? article.User.image : 'https://image.ibb.co/i48Wqf/paceholder.jpg'}
                      className="img-fluid article-author-image rounded-circle"
                      alt=""
                    />
                    <div className="ml-3 ml-md-3 ml-lg-4">
                      <div className="my-2 author-name">{article.User.username}</div>
                      <div className="author-bio">
                        {article.User.bio !== null
                          ? article.User.bio : 'I love to write'}
                      </div>
                      <button className="btn follow-btn" type="button">follow</button>
                    </div>
                  </div>
                </div>
                <div className="article-reactions mt-4 d-flex justify-content-around">
                  <Like
                    iconClassName={likes
                      ? 'mdi mdi-thumb-up'
                      : 'mdi mdi-thumb-up-outline'
                }
                    spanClassName="likes-num"
                    count={count}
                    onClick={this.onClick}
                  />
                  <a href={twitterUrl}><i className="mdi mdi-twitter" /></a>
                  <a href={facebookUrl}><i className="mdi mdi-facebook" /></a>
                  <a href={emailUrl} target="_blank" rel="noopener noreferrer">
                    <i className="mdi mdi-email" />
                  </a>
                  <i className="mdi mdi-bookmark" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container-fluid comment-container">
              <ArticleComments />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


ReadArticle.propTypes = {
  fetchSingleArticle: PropTypes.func.isRequired,
  loadCommentsAction: PropTypes.func.isRequired,
  article: PropTypes.shape({}),
  match: PropTypes.shape({}),
  auth: PropTypes.shape({}),
  count: PropTypes.number,
  comment: PropTypes.shape({}),
  user: PropTypes.shape({}),
  showReportModal1: PropTypes.func,
  deleteUserArticle: PropTypes.func,
  getUserReport: PropTypes.func,
  history: PropTypes.instanceOf(Object),
  reported: PropTypes.instanceOf(Object),
  userLikeStatus: PropTypes.bool,
  likeArticle: PropTypes.func,
  unlikeArticle: PropTypes.func,
  articleLikesCount: PropTypes.func,
};

const mapStateToProps = state => ({
  article: state.articleReducer.article,
  comment: state.commentReducer.comment,
  count: state.articleReducer.articleLikes,
  auth: state.auth,
  userLikeStatus: state.articleReducer.likeStatus,
  modal: state.modal,
  user: state.auth.user,
  reported: state.postReport.reports
});

const matchDispatchToProps = dispatch => bindActionCreators({
  fetchSingleArticle: Article.fetchSingleArticle,
  loadCommentsAction: loadComments,
  showReportModal1: showReportModal,
  deleteUserArticle: Article.deleteUserArticle,
  getUserReport: getReports,
  articleLikesCount: Article.articleLikesCount,
  likeArticle: Article.likeArticle,
  unlikeArticle: Article.unlikeArticle,
  likeStatus: Article.articleLikeStatus
}, dispatch);

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(ReadArticle);
