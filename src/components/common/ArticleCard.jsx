import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArticleCard = ({ article }) => (
  <div className="card shadow-lg border-0 mb-5 featured-post">
    <div className="card-body">
      <Link to={`/articles/${article.slug}`} className="card-title post-title">
        <h3 className="card-title post-title">
          {article.title}
        </h3>
      </Link>
      <p className="card-text post-date">
        {moment(article.createdAt).fromNow()}
        <span className="ml-4 font-weight-light font-italic">
          {article.Tags ? article.Tags[0].name.toUpperCase() : '' }
        </span>
      </p>
      <div className="card-text post-description">
        {article.body.length < 200 ? article.body : `${article.body.substring(0, 200)}...`}
      </div>
      <br />
      <div className="row">
        <div className="col-sm-6 author">
          {`${article.User.firstname} ${article.User.lastname}`}
          <br />
          <p>
            <small className="text-muted font-italic">
              {article.readingTime}
            </small>
          </p>
        </div>
      </div>
    </div>
  </div>
);

ArticleCard.propTypes = {
  article: PropTypes.shape({}).isRequired,
};

export default ArticleCard;
