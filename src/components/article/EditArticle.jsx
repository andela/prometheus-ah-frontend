import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Article from '../../actions/articleActions';
import ArticleForm from './ArticleForm';


/**
 * class ArticleListPage
 * @returns {Object} New article
 * @param {object} article - inputs from article form
 */
export class EditArticle extends Component {
  /**
   * @param {*} update
   * @returns {*} object
   */
  onSubmit =(update) => {
    const { editUserArticle, match, history } = this.props;
    editUserArticle(match.params.slug, update).then(() => {
      history.push(`/articles/${match.params.slug}`);
    });
  };

  /**
   * render jsx
   * @returns {object} jsx
   */
  render() {
    const { article, match } = this.props;
    return (
      <div className="container">
        <div className="editor-config">
          <ArticleForm
            article={article}
            onSubmit={this.onSubmit}
            match={match}
          />
        </div>
      </div>
    );
  }
}
EditArticle.propTypes = {
  editUserArticle: PropTypes.func.isRequired,
  article: PropTypes.shape([]),
  match: PropTypes.shape({}),
  history: PropTypes.shape({}),
};
const mapStateToProps = (state, props) => (
  {
    article: state.articleReducer.articles.find(item => item.slug === props.match.params.slug)
  }
);
const matchDispatchToProps = dispatch => bindActionCreators({
  editUserArticle: Article.editUserArticle,
}, dispatch);
export default connect(mapStateToProps, matchDispatchToProps)(EditArticle);
