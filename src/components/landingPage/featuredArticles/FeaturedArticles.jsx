import React from 'react';
import PropTypes from 'prop-types';
import FeaturedArticle from './FeaturedArticle';

const FeaturedArticles = (props) => {
  const { posts } = props;
  return (
    <div className="col-12 col-md-7 col-lg-7">
      <h2 className="section-title">FEATURED POSTS</h2>
      {
        posts.map((post, index) => (
          <FeaturedArticle
            key={post.id}
            active={index}
            image={post.image}
            title={post.title}
            date={post.createdAt}
            category={post.Tags[0]}
            description={post.description}
            readTime={post.readingTime}
            author={`${post.User.firstname} ${post.User.lastname}`}
          />
        ))
      }
    </div>
  );
};

FeaturedArticles.propTypes = {
  posts: PropTypes.instanceOf(Array)
};

export default FeaturedArticles;
