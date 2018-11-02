import React from 'react';
import PropTypes from 'prop-types';
import RecentPost from './RecentPost';

const RecentPosts = (props) => {
  const { posts } = props;

  // const postTag = posts.Tags.length ? `${posts.Tags[0].name}` : null;

  return (
    <div>
      <h2 className="section-title">RECENT POSTS</h2>
      {
        posts.map(post => (
          <RecentPost
            key={post.id}
            image={post.image}
            title={post.title}
            date={post.createdAt}
            category={post.Tags.length ? `${post.Tags[0].name}` : null}
            readTime={post.readingTime}
            author={post.User}
            slug={post.slug}
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
