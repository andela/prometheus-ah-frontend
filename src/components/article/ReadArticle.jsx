import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import Article from '../../actions/articleActions';
import Loading from '../common/Loading';


/**
 * class ReadArticlePage
 * @returns {Object} New article
 * @param {object} article - inputs from article form
 */
export class ReadArticle extends Component {
  componentDidMount = () => {
    const { fetchSingleArticle, match } = this.props;
    fetchSingleArticle(match.params.slug);
  }

  /**
   * render jsx
   * @returns {object} jsx
   */
  render() {
    const { article } = this.props;
    if (!article) {
      return (
        <div className="read-article my-5">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }

    return (
      <div className="read-article my-5">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <div className="article-title">
              <h1 className="title">{ReactHtmlParser(article.title)}</h1>
              <div>
                <span className="mr-5 text-muted">{article.readingTime}</span>
                <span className="text-muted">
                  {moment(article.createdAt).format('MMM D, YYYY')}
                </span>
              </div>
              <p className="mt-3 description font-italic text-muted">
                {ReactHtmlParser(article.description)}
              </p>
              <div className="article-reactions mt-2 d-flex justify-content-around">
                <i className="mdi mdi-thumb-up-outline">
                  <span className="likes-num"> 30</span>
                </i>
                <i className="mdi mdi-twitter" />
                <i className="mdi mdi-facebook" />
                <i className="mdi mdi-bookmark" />
                <i className="mdi mdi-email" />
              </div>
            </div>
          </div>

          <div className="col-12 mt-5 col-lg-8 offset-lg-2">
            <p className="post-body">{ReactHtmlParser(article.body)}</p>
          </div>
          <div className="col-12 mt-4 offset-lg-2">
            {article.Tags.length >= 1 ? article.Tags.map(tag => (
              <span className="btn tags" key={tag.name}>{tag.name}</span>
            )) : ''}
          </div>

          <div className="col-12 col-md-9 offset-md-1 mt-4 col-lg-6 offset-lg-3">
            <div className="shadow-lg border-0 card p-3 p-lg-4">
              <div className="d-flex mb-3">
                <img
                  src={article.User.image !== null
                    ? article.User.image : 'https://image.ibb.co/i48Wqf/paceholder.jpg'}
                  className="img-fluid article-author-image rounded-circle"
                  alt=""
                />
                <div className="ml-3 ml-md-3 ml-lg-4 text-center">
                  <p className="my-2 author-name">{article.User.username}</p>
                  <button className="btn follow-btn" type="button">follow</button>
                </div>
              </div>
              <p className="author-bio">
                {article.User.bio !== null
                  ? article.User.bio : 'I love to write'}
              </p>
            </div>
            <div className="article-reactions mt-4 d-flex justify-content-around">
              <i className="mdi mdi-thumb-up-outline">
                <span className="likes-num"> 30</span>
              </i>
              <i className="mdi mdi-twitter" />
              <i className="mdi mdi-facebook" />
              <i className="mdi mdi-bookmark" />
              <i className="mdi mdi-email" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReadArticle.propTypes = {
  fetchSingleArticle: PropTypes.func.isRequired,
  article: PropTypes.shape({}),
  match: PropTypes.shape({})
};
const mapStateToProps = state => ({
  article: state.articleReducer.article
});

const matchDispatchToProps = dispatch => bindActionCreators({
  fetchSingleArticle: Article.fetchSingleArticle,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(ReadArticle);
