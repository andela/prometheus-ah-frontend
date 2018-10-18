import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Article from '../../actions/articleActions';


/**
 * class ArticleListPage
 * @returns {Object} New article
 * @param {object} article - inputs from article form
 */
class UserArticle extends Component {
  componentDidMount = () => {
    const { fetchUserArticle } = this.props;
    const { user } = this.props;
    fetchUserArticle(user.username);
  }

  /**
   * delete an article
   *@param {*} slug - takes the article slug
   *@return {*} empty object
   */
  handleDelete = (slug) => {
    const { deleteUserArticle } = this.props;
    deleteUserArticle(slug);
  }

  /**
   * render jsx
   * @returns {object} jsx
   */
  render() {
    const { articles } = this.props;
    const { deleted } = this.props;
    if (deleted) {
      return <Redirect to="/articles" />;
    }
    return (
      <div>
        <div className="container">
          {articles.map(article => (
            (
              <ul key={article.id}>
                <li>
                  <Link to={`/articles/${article.slug}`}>{ReactHtmlParser(article.title)}</Link>
                  <br />
                  <div>{article.User.username}</div>
                  <div>{ReactHtmlParser(article.description)}</div>
                  <div>{article.readingTime}</div>
                  <button
                    type="button"
                    className="btn btn-primary-outline"
                    onClick={() => this.handleDelete(article.slug)}
                  >
                  Delete

                  </button>
                  <Link to={`/articles/${article.slug}/edit`}>
                    <button type="button" className="btn btn-primary">Edit</button>
                  </Link>
                </li>
              </ul>
            )))}
        </div>
      </div>
    );
  }
}
UserArticle.propTypes = {
  fetchUserArticle: PropTypes.func.isRequired,
  articles: PropTypes.instanceOf(Array),
  deleteUserArticle: PropTypes.func.isRequired,
  deleted: PropTypes.shape({}),
  user: PropTypes.shape({})
};
const mapStateToProps = state => ({
  articles: state.articleReducer.articles,
  deleted: state.articleReducer.deleted,
  user: state.auth.user
});

const matchDispatchToProps = dispatch => bindActionCreators({
  fetchUserArticle: Article.fetchUserArticle,
  deleteUserArticle: Article.deleteUserArticle
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(UserArticle);
