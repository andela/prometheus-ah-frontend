import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import EmptyImage from './EmptyImage';
import Article from '../../actions/articleActions';
import likes from '../../images/likes.svg';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';
import bookmark from '../../images/bookmark.svg';


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
    return (
      <div>
        <div className="row">
          <div className="col-sm-2 col-md-3" />
          <div className="col-sm-8 col-md-8 title">
            <h2 className="text-center">{article ? ReactHtmlParser(article.title) : ''}</h2>
            <div className="row text-center">
              <span className="col-sm-2 col-md-1" />
              <span className="col-sm-3 col-md-3">
                ART
              </span>
              <span className="col-sm-3 col-md-3">
                {article ? moment(article.createdAt).format('MMM D, YYYY') : ''}
              </span>
              <span className="col-sm-3 col-md-3">{article ? article.readingTime : ''}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5 col-md-4">
            <div className="card author-card">
              <div className="card-body">
                <div className="text-center">
                  <div className="author-image">
                    {article && article.User.image !== null ? article.User.image : <EmptyImage />}
                  </div>
                  <p>{article ? article.User.username : ''}</p>
                  <div className="author-btn">
                    <button type="button" className="btn btn-primary author-button">Hire</button>
                    <button type="button" className="btn btn-primary author-button">Follow</button>
                  </div>
                  <div className="author-bio">
                    {article && article.User.bio !== null
                      ? article.User.bio : 'Authors Biography... I want to write'}
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-sm-8 col-md-4" />
              <div className="col-sm-8 col-md-8 card social-card">
                <div className="card-body text-left social-responsive">
                  <p>
                    <img src={likes} alt="Likes" />
                    <span>50</span>
                  </p>
                  <p><img src={twitter} alt="Twitter" /></p>
                  <p><img src={facebook} alt="Facebook" /></p>
                  <p><img src={bookmark} alt="bookmark" /></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-7 col-md-7">
            <div className="row row-margin">
              <div className="col-sm-2 col-md-2" />
              <div className="col-sm-11 col-md-11 article-body">
                {article ? ReactHtmlParser(article.body) : ''}
              </div>
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
