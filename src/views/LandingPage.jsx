import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Article from '../actions/articleActions';
import fetchAuthor from '../actions/featuedAuthor.action';
import Loading from '../components/common/Loading';
import data from './articlesData';
import Footer from '../components/Footer';
import RatedArticles from '../components/landingPage/ratedArticles/RatedArticles';
import FeaturedArticles from '../components/landingPage/featuredArticles/FeaturedArticles';
import RecentPost from '../components/landingPage/recentPosts/RecentPosts';
import FeaturedAuthor from '../components/landingPage/featuredAuthor/FeaturedAuthor';

/**
 * @class LandingPage
 */
export class LandingPage extends Component {
  componentDidMount = () => {
    const { actions } = this.props;
    actions.fetchFeaturedArticles();
    actions.fetchArticles();
    actions.fetchAuthor();
  }

  /**
   * @description Render the JSX template
   *
   * @memberof LoginModal
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const { featuredArticles, articles, author } = this.props;

    if (!featuredArticles || !articles.length || !author.featuredAuthor) {
      return (
        <Loading />
      );
    }

    const ratedPosts = data.articles.slice(0, 5);
    const recentPosts = articles.slice(0, 3);

    return (
      <React.Fragment>
        <RatedArticles posts={ratedPosts} />
        <section className="main-content my-5">
          <div className="row">
            <FeaturedArticles posts={featuredArticles} />
            <div className="col-12 col-md-5 col-lg-5">
              <FeaturedAuthor author={author} />
              <RecentPost posts={recentPosts} />
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

LandingPage.propTypes = {
  actions: PropTypes.instanceOf(Object),
  featuredArticles: PropTypes.instanceOf(Array),
  articles: PropTypes.instanceOf(Array),
  author: PropTypes.instanceOf(Object)
};

const mapStateToProps = state => ({
  featuredArticles: state.articleReducer.featuredArticles,
  articles: state.articleReducer.articles,
  author: state.featuredAuthor
});

const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchFeaturedArticles: Article.fetchFeaturedArticles,
      fetchArticles: Article.fetchArticle,
      fetchAuthor
    }, dispatch
  )
});

export default connect(mapStateToProps, matchDispatchToProps)(LandingPage);
