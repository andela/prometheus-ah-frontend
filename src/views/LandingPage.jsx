import React, { Component } from 'react';
import data from './articlesData';
import Footer from '../components/Footer';
import RatedArticles from '../components/landingPage/ratedArticles/RatedArticles';
import FeaturedArticles from '../components/landingPage/featuredArticles/FeaturedArticles';
import RecentPost from '../components/landingPage/recentPosts/RecentPosts';
import FeaturedAuthor from '../components/landingPage/featuredAuthor/FeaturedAuthor';

/**
 * @class LandingPage
 */
class LandingPage extends Component {
  /**
   * @description Render the JSX template
   *
   * @memberof LoginModal
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const ratedPosts = data.articles.slice(0, 5);
    const featuredPosts = data.articles.slice(0, 5);
    const recentPosts = data.articles.slice(-3);
    const authorPosts = data.articles.slice(4, 7);
    const featuredAuthor = data.user;

    return (
      <React.Fragment>
        <RatedArticles posts={ratedPosts} />
        <section className="main-content my-5">
          <div className="row">
            <FeaturedArticles posts={featuredPosts} />
            <div className="col-12 col-md-5 col-lg-5">
              <FeaturedAuthor posts={authorPosts} author={featuredAuthor} />
              <RecentPost posts={recentPosts} />
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default LandingPage;
