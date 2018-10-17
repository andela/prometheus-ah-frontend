import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const RatedArticle = ({
  title, body, author, date, active
}) => {
  const formatedDate = moment(date).format('MMM DD, YYYY');
  const truncatedString = body.slice(0, 120);
  let classname = 'carousel-item slide';
  if (active === 0) {
    classname = 'carousel-item active slide';
  }
  return (
    <div className={classname}>
      <h2 className="carousel-article-title">{title}</h2>
      <p className="carousel-author-name">{`${author} - ${formatedDate}`}</p>
      <p>{`${truncatedString}...`}</p>
      <button type="button" className="btn read-more">Read more</button>
    </div>
  );
};

RatedArticle.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  active: PropTypes.number
};

export default RatedArticle;
