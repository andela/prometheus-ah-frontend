import React from 'react';
import PropTypes from 'prop-types';
import FeaturedAuthorPost from './FeaturedAuthorPost';

const FeaturedAuthor = (props) => {
  const { author } = props;
  const { featuredAuthor } = author;
  const articles = featuredAuthor.articles.slice(-3);

  const { firstname, lastname, username } = featuredAuthor;

  let authorName = `${firstname} ${lastname}`;

  if (!firstname || !lastname) {
    authorName = username;
  }

  return (
    <div>
      <h2 className="section-title">FEATURED AUTHOR</h2>
      <div className="card shadow-lg border-0 mb-5 featured-author">
        <div className="d-flex ml-3 mt-4">
          <img
            src={featuredAuthor.image
              ? featuredAuthor.image
              : 'https://image.ibb.co/i48Wqf/paceholder.jpg'}
            className="img-fluid featured-author-image rounded-circle"
            alt=""
          />
          <div className="author-detail ml-5 mt-3">
            <p className="author mb-1">
              {authorName}
            </p>
            <button type="button" className="btn btn-follow">Follow</button>
          </div>
        </div>
        <div className="mx-4 mt-5">
          {
            articles.map(post => (
              <FeaturedAuthorPost
                key={post.id}
                title={post.title}
                readTime={post.readingTime}
                slug={post.slug}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

FeaturedAuthor.propTypes = {
  author: PropTypes.instanceOf(Object),
};

export default FeaturedAuthor;
