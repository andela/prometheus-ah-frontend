import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const FeaturedArticle = ({
  active, image, title, date, category, description, readTime, author
}) => {
  const formatedDate = moment(date).format('MMM DD, YYYY');

  return (
    <div className="card shadow-lg border-0 mb-5 featured-post">
      {active === 0 && <img src={image} className="img-fluid featured-post-image" alt="" />}
      <div className="card-body">
        <h3 className="card-title post-title">{title}</h3>
        <p className="card-text post-date">
          {formatedDate}
          <span className="ml-4 font-weight-light font-italic">{category.toUpperCase()}</span>
        </p>
        <p className="card-text post-description">{description}</p>
        <div className="d-flex justify-content-between">
          <div className="card-text post-author">
            <p className="author">{author}</p>
            <p><small className="text-muted font-italic">{readTime}</small></p>
          </div>
          <i className="far fa-bookmark" />
        </div>
      </div>
    </div>
  );
};

FeaturedArticle.propTypes = {
  active: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  readTime: PropTypes.string,
  author: PropTypes.string
};

export default FeaturedArticle;
