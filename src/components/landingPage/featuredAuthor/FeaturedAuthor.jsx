import React from 'react';
import PropTypes from 'prop-types';
import FeaturedAuthorPost from './FeaturedAuthorPost';

const FeaturedAuthor = (props) => {
  const { posts, author } = props;

  return (
    <div className="col-12">
      <h2 className="section-title">FEATURED AUTHOR</h2>
      <div className="card shadow-lg border-0 mb-5 featured-author">
        <div className="d-flex ml-3 mt-4">
          <img
            src={author.image}
            className="img-fluid featured-author-image rounded-circle"
            alt=""
          />
          <div className="author-detail ml-4 mt-3">
            <p className="author mb-1">{`${author.firstname} ${author.lastname}`}</p>
            <button type="button" className="btn btn-follow">Follow</button>
          </div>
        </div>
        <div className="mx-4 mt-5">
          {
            posts.map(post => (
              <FeaturedAuthorPost
                key={post.id}
                title={post.title}
                image={post.image}
                readTime={post.readingTime}
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
  posts: PropTypes.instanceOf(Array)
};

export default FeaturedAuthor;
