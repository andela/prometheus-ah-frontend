import React from 'react';
import PropTypes from 'prop-types';


const FeaturedAuthorPost = ({
  title, image, readTime
}) => (
  <div className="d-flex justify-content-between featured-author-post mb-3">
    <div className="author-post">
      <h3 className="post-title">{title}</h3>
      <p><small className="text-muted font-italic">{readTime}</small></p>
    </div>
    <img src={image} className="img-fluid post-image" alt="" />
  </div>
);

FeaturedAuthorPost.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  readTime: PropTypes.string,
};

export default FeaturedAuthorPost;
