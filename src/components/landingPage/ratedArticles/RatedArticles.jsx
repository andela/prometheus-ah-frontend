import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import RatedArticle from './RatedArticle';
import ResetPassword from '../../ResetLink';

/**
 * @class RatedArticles
 */
class RatedArticles extends Component {
  /**
   * @description Render the JSX template
   *
   * @memberof LoginModal
   *
   * @returns {JSX} JSX representation of component
   */
  render() {
    const { posts } = this.props;
    return (
      <div>
        <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
          <ResetPassword />
          <div className="d-flex flex-column">
            <div className="landing-label">TOP-RATED</div>
            <ol className="carousel-indicators">
              <li data-target="#carouselIndicators" data-slide-to="0" className="active" />
              <li data-target="#carouselIndicators" data-slide-to="1" />
              <li data-target="#carouselIndicators" data-slide-to="2" />
              <li data-target="#carouselIndicators" data-slide-to="3" />
              <li data-target="#carouselIndicators" data-slide-to="4" />
            </ol>
            <div className="carousel-inner">
              {
                posts.map((post, index) => (
                  <RatedArticle
                    key={post.id}
                    author={post.User.username}
                    title={post.title}
                    body={ReactHtmlParser(post.body)}
                    date={post.createdAt}
                    active={index}
                  />))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RatedArticles.propTypes = {
  posts: PropTypes.instanceOf(Array)
};

export default RatedArticles;
