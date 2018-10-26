import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routes from '../constants/routes';
import userProfile from '../actions/profile/userProfile.action';
import userArticles from '../actions/profile/userArticles.action';
import userFollowers from '../actions/profile/userFollowers.action';
import userFollowing from '../actions/profile/userFollowing.action';
import Profile from '../components/Profile';
import Loading from '../components/common/Loading';

/**
 * Profile page
 */
class ProfilePage extends Component {
  /**
   * componentDidMount
   *
   * @return {void}
   */
  componentDidMount() {
    const {
      userProfileAction, userArticlesAction, userFollowersAction, userFollowingAction
    } = this.props;
    const { user: { user: { username = {} } } } = this.props;
    Promise.all([
      userProfileAction(username),
      userArticlesAction(username),
      userFollowersAction(username),
      userFollowingAction(username)
    ]);
  }

  /**
   * render
   *
   * @return {void}
   */
  render() {
    const { loading } = this.props;
    if (loading) {
      return (<Loading />);
    }

    const {
      profile: { user: { profile = {} } = {} },
      articles: { user: { articles = {} } = {} },
      followers,
      following,
      user: { user: { userId } = {} },
      history,
      user: { isAuthenticated = {} }
    } = this.props;

    if (!isAuthenticated) {
      history.push('/');
    }


    if (Object.keys(profile).length === 0) {
      return (
        <div>
          <Link to={routes.LANDING}>Home Page</Link>
        </div>
      );
    }

    return (
      <div>
        <Profile
          profile={profile}
          articles={articles}
          followers={followers}
          following={following}
          userId={userId}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.userProfile.loading,
  profile: state.userProfile,
  articles: state.userArticles,
  bookmarks: state.userBookmarks,
  followers: state.userFollowers,
  following: state.userFollowing,
  user: state.auth,
});

const mapDispatchToProps = dispatch => ({
  userProfileAction: user => dispatch(userProfile(user)),
  userArticlesAction: username => dispatch(userArticles(username)),
  userFollowersAction: username => dispatch(userFollowers(username)),
  userFollowingAction: username => dispatch(userFollowing(username)),
});

ProfilePage.propTypes = {
  userProfileAction: PropTypes.func.isRequired,
  userFollowersAction: PropTypes.func.isRequired,
  userFollowingAction: PropTypes.func.isRequired,
  userArticlesAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  profile: PropTypes.shape({
  }).isRequired,
  followers: PropTypes.shape({
  }).isRequired,
  following: PropTypes.shape({
  }).isRequired,
  user: PropTypes.shape({
  }).isRequired,
  articles: PropTypes.shape({
  }).isRequired,
  history: PropTypes.shape({
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
