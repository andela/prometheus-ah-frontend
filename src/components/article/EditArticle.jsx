import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
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
  componentDidMount = () => {
    const { match, fetchSingleArticle } = this.props;
    if (match && match.params.slug) {
      fetchSingleArticle(match.params.slug);
    }
  }

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
    const {
      article, match, user, history
    } = this.props;
    if (article && article.userId !== user.userId) {
      toastr.error('You can\'t edit an article that doesn\'t belong to you');
      history.push(`/articles/${match.params.slug}`);
    }
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
  fetchSingleArticle: PropTypes.func,
  editUserArticle: PropTypes.func.isRequired,
  article: PropTypes.shape([]),
  match: PropTypes.shape({}),
  history: PropTypes.shape({}),
  user: PropTypes.shape({})
};
const mapStateToProps = state => (
  {
    article: state.articleReducer.article,
    user: state.auth.user
  }
);
const matchDispatchToProps = dispatch => bindActionCreators({
  editUserArticle: Article.editUserArticle,
  fetchSingleArticle: Article.fetchSingleArticle
}, dispatch);
export default connect(mapStateToProps, matchDispatchToProps)(EditArticle);
