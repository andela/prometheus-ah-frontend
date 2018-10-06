import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Article from '../../actions/articleActions';

/**
 * class ArticleListPage
 * @returns {Object} New article
 * @param {objecgt} article - inputs from article form
 */
class ArticleListPage extends Component {
  componentDidMount = () => {
    const { fetchArticle } = this.props;
    fetchArticle();
  }

  /**
   * render jsx
   * @returns {object} jsx
   */
  render() {
    const { articles } = this.props;
    return (
      <div>
        <div className="container">
          {articles.map(article => (
            (
              <ul key={article.id}>
                <li>
                  <Link
                    to={`/articles/${article.slug}`}
                  >
                    {ReactHtmlParser(article.title)}
                  </Link>
                  <br />
                  <span key={article.User.username}>{ReactHtmlParser(article.User.username)}</span>
                  <p key={article.description}>{ReactHtmlParser(article.description)}</p>
                  <p key={article.readingTime}>{ReactHtmlParser(article.readingTime)}</p>
                </li>
              </ul>
            )))}
        </div>
      </div>
    );
  }
}
ArticleListPage.propTypes = {
  fetchArticle: PropTypes.func.isRequired,
  articles: PropTypes.instanceOf(Array),
};
const mapStateToProps = state => ({
  articles: state.articleReducer.articles,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  fetchArticle: Article.fetchArticle,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(ArticleListPage);
