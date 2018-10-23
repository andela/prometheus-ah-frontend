import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const FeaturedAuthorPost = ({
  title, readTime, slug
}) => (
  <div className="featured-author-post mb-3">
    <div className="author-post">
      <Link to={`/articles/${slug}`} className="post-title">{title}</Link>
      <p className="mt-3"><small className="text-muted font-italic">{readTime}</small></p>
    </div>
  </div>
);

FeaturedAuthorPost.propTypes = {
  title: PropTypes.string,
  readTime: PropTypes.string,
  slug: PropTypes.string,
};

export default FeaturedAuthorPost;
