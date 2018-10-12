import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import { loadArticles } from '../../actions';

/**
 * @class Articles
 */
export class Articles extends Component {
  /**
 * @description - Class constructor
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.getNextArticlePage = this.getNextArticlePage.bind(this);
    this.state = {
      articles: [],
      articleUrl: 'articles',
      articlePage: 1,
      pageCount: 1,
      hasMoreItems: true,
    };
  }

  /**
   * @returns {Object} - Actions
   */
  componentDidMount() {
    const { loadArticlesAction } = this.props;
    const { articlePage, articleUrl } = this.state;
    const url = `api/${articleUrl}?page=${articlePage}`;
    loadArticlesAction(url)
      .then((res) => {
        this.setState({
          articles: res.articles,
          articlePage: res.paginationMeta.currentPage,
          pageCount: res.paginationMeta.pageCount,
        });
      });
  }

  /**
  * @description - Gets articles from the next page
   *
   * @returns {*} - 1
   */
  getNextArticlePage() {
    const {
      articlePage,
      pageCount,
      articles,
      articleUrl
    } = this.state;
    const { loadArticlesAction } = this.props;
    if (articlePage <= pageCount) {
      this.setState(prevState => ({
        articlePage: prevState.articlePage + 1,
      }));
      const { articlePage: articlePageUpdate } = this.state;
      if (articlePageUpdate > pageCount) {
        this.setState(({
          hasMoreItems: false,
        }));
      }
      loadArticlesAction(`api/${articleUrl}?page=${articlePage}`).then((res) => {
        if (JSON.stringify(articles) !== JSON.stringify(res.articles)) {
          this.setState(prevState => ({
            articles: prevState.articles.concat(res.articles),
          }));
        }
      });
    }
  }

  /**
  * @description - Component render function
   *
   * @returns {*} - 1
   */
  render() {
    const loader = <div className="loader">Loading ...</div>;
    const items = [];
    const { articles, hasMoreItems } = this.state;
    articles.map(article => items.push(
      <div>
        <div className="card">
          <div className="article card-body" key={article.id}>
            <h5 className="card-title">
              <Link to={`/api/articles/${article.slug}`}>{article.title}</Link>
            </h5>
            <p className="card-text">Article body goes here, it can be about anything.</p>
            <a href={article.watchHref} className="card-link">{article.readingTime}</a>
          </div>
        </div>
        <br />
      </div>
    ));

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.getNextArticlePage}
        hasMore={hasMoreItems}
        loader={loader}
      >
        <div className="articles">
          {items}
        </div>
      </InfiniteScroll>
    );
  }
}

Articles.propTypes = {
  loadArticlesAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  articles: state.articles,
  articlePage: state.articlePage,
  articleUrl: state.articleUrl,
  pageCount: state.pageCount,
  hasMoreItems: state.hasMoreItems,
});

export default connect(mapStateToProps, { loadArticlesAction: loadArticles })(Articles);
