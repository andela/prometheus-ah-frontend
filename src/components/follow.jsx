import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  followUserAction, unfollowUserAction, getMyFollowingActions, getMyFollowersActions
} from '../actions/followAction';

/**
 * @description follow button class allows users follow one another
 * @returns {*} jsx
 */
class FollowButton extends Component {
  /**
   *
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      isFollowing: false
    };
  }

  componentWillMount() {
    this.props.myFollowers(this.props.username);
    this.props.myFollowing(this.props.username);
  }

handleClick = () => {
  if (this.props.isFollowing === true) {
    this.props.unfollowUser(this.props.username, this.props.user);
  } else {
    this.props.followUser(this.props.username, this.props.user);
  }
}

renderFollows = follows => follows && follows.map(follow => <span key={follow.username}>{follow.username}</span>)

/**
   *
   * @param {*} event
   * @returns {*} - state
   */
render() {
  const { isFollowing, followingData: { myTotalFollow, authorsIFollow } } = this.props;
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={this.handleClick}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}

      </button>
      <div>
        <span>{myTotalFollow}</span>
        {this.renderFollows(authorsIFollow)}
      </div>
    </div>
  );
}
}

const mapStateToProps = state => ({
  isFollowing: state.followReducer.isFollowing,
  error: state.followReducer.error,
  followingData: state.followReducer.following,
  user: state.auth.user.username
});
const mapDispatchToProps = dispatch => ({
  followUser: (username, user) => {
    dispatch(followUserAction(username, user));
  },
  unfollowUser: (username, user) => {
    dispatch(unfollowUserAction(username, user));
  },
  myFollowers: (username) => {
    dispatch(getMyFollowersActions(username));
  },
  myFollowing: (username) => {
    dispatch(getMyFollowingActions(username));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
