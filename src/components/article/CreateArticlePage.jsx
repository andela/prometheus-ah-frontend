import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Article from '../../actions/articleActions';
import ArticleForm from './ArticleForm';


/**
 * class CreateArticlePage
 * @returns {Object} New article
 * @param {object} article - inputs from article form
 */
export class CreateArticlePage extends Component {
  onSubmit = (article) => {
    const { createArticle, history } = this.props;
    createArticle(article).then((res) => {
      history.push(`/articles/${res.data.article.slug}`);
    });
  };

  /**
   * render jsx
   * @returns {object} jsx
   */
  render() {
    return (
      <div>
        <div className="container">
          <div className="editor-config">
            <ArticleForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}
CreateArticlePage.propTypes = {
  createArticle: PropTypes.func,
  history: PropTypes.shape({})
};
const matchDispatchToProps = dispatch => bindActionCreators({
  createArticle: Article.createArticle
}, dispatch);
export default connect(null, matchDispatchToProps)(CreateArticlePage);
