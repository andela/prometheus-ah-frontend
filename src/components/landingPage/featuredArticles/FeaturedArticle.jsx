import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import PropTypes from 'prop-types';

const FeaturedArticle = ({
  active, image, title, date, category, description, readTime, author, slug
}) => {
  const formatedDate = moment(date).format('MMM DD, YYYY');
  const { firstname, lastname, username } = author;

  let authorName = `${firstname} ${lastname}`;

  if (!firstname || !lastname) {
    authorName = username;
  }

  return (
    <div className="card shadow-lg border-0 mb-5 featured-post">
      {active === 0
        && (
          <img
            src={image ? image : 'https://image.ibb.co/c3DFrV/article-thumbnail.jpg'} // eslint-disable-line
            className="img-fluid featured-post-image"
            alt=""
          />)}
      <div className="card-body">
        <Link to={`/articles/${slug}`} className="card-title post-title">{title}</Link>
        <p className="card-text post-date">
          {formatedDate}
          <span className="ml-4 font-weight-light font-italic text-uppercase">{category}</span>
        </p>
        <p className="card-text post-description">{ReactHtmlParser(description)}</p>
        <div className="d-flex justify-content-between">
          <div className="card-text post-author">
            <p className="author">{authorName}</p>
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
  slug: PropTypes.string,
  author: PropTypes.instanceOf(Object)
};

export default FeaturedArticle;
