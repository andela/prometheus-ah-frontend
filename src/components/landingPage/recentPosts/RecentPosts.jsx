import React from 'react';
import PropTypes from 'prop-types';
import RecentPost from './RecentPost';

const RecentPosts = (props) => {
  const { posts } = props;

  return (
    <div className="col-12">
      <h2 className="section-title">RECENT POSTS</h2>
      {
        posts.map(post => (
          <RecentPost
            key={post.id}
            image={post.image}
            title={post.title}
            date={post.createdAt}
            category={post.Tags[0]}
            readTime={post.readingTime}
            author={`${post.User.firstname} ${post.User.lastname}`}
          />
        ))
      }
    </div>
  );
};

RecentPosts.propTypes = {
  posts: PropTypes.instanceOf(Array)
};

export default RecentPosts;
