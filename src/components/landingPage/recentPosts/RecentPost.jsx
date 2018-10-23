import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

const RecentPost = ({
  image, title, date, category, readTime, author, slug
}) => {
  const formatedDate = moment(date).startOf('hour').fromNow();
  const { firstname, lastname, username } = author;

  let authorName = `${firstname} ${lastname}`;

  if (!firstname || !lastname) {
    authorName = username;
  }

  return (
    <div className="card shadow-lg border-0 mb-5 recent-post">
      <img
        src={image ? image : 'https://image.ibb.co/c3DFrV/article-thumbnail.jpg'} // eslint-disable-line
        className="img-fluid recent-post-image"
        alt=""
      />
      <div className="card-body">
        <Link to={`/articles/${slug}`} className="card-title post-title">{title}</Link>
        <div className="d-flex justify-content-between mt-3">
          <div className="card-text post-author">
            <p className="author">{authorName}</p>
            <p><small className="text-muted font-italic">{readTime}</small></p>
          </div>
          <div className="card-text post-time">
            <p className="font-weight-light font-italic text-uppercase">{category}</p>
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
  slug: PropTypes.string,
  author: PropTypes.instanceOf(Object)
};

export default RecentPost;
