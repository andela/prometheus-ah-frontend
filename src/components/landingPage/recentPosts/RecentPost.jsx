import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const RecentPost = ({
  image, title, date, category, readTime, author
}) => {
  const formatedDate = moment(date).startOf('hour').fromNow();
  return (
    <div className="card shadow-lg border-0 mb-5 recent-post">
      <img src={image} className="img-fluid recent-post-image" alt="" />
      <div className="card-body">
        <h3 className="card-title post-title">{title}</h3>
        <div className="d-flex justify-content-between">
          <div className="card-text post-author">
            <p className="author">{author}</p>
            <p><small className="text-muted font-italic">{readTime}</small></p>
          </div>
          <div className="card-text post-time">
            <p className="font-weight-light font-italic">{category}</p>
            <p className="time">{formatedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

RecentPost.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  readTime: PropTypes.string,
  author: PropTypes.string
};

export default RecentPost;
