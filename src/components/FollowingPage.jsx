import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import UserNavigation from './navigation/UserNavigation';
import {
  getMyFollowingActions,
  getMyFollowersActions
} from '../actions/followAction';

/**
 * @description class to display followers and following
 *
 * @class DisplayFollow
 *
 * @extends {Component}
 */
class DisplayFollow extends Component {
  state = {
    selected: ''
  }

  /**
   * @description Render the JSX template
   *
   * @memberof DisplayFollow
   * @returns {JSX} render JSX template
   */
  componentWillMount() {
    const { myFollowers, myFollowing, user } = this.props;
    /* myFollowers(user); */
    myFollowing(user);
  }

  renderFollows = follows => follows
    && follows.map(
      follow => <div key={follow.username}>{follow.username}</div>
    );

  /**
   *
   * @param {*} event
   * @returns {*} - state
   */
  render() {
    console.log('foloowers', this.props.followingData);
    const {
      isFollowing,
      followingData: { myTotalFollow, authorsIFollow }
    } = this.props;
    return (
      <Fragment>
        <h1>CHIDINMAAAA</h1>
        {/* <Header /> */}
        <UserNavigation />
        <div className="card text-center" style={{ width: '50%', margin: 'auto', boxShadow: '2px 6px' }}>
          <div className="card-body">
            <h5 className="card-title">
            Followings
              <br />
              <span>{myTotalFollow}</span>
              <div>{this.renderFollows(authorsIFollow)}</div>
            </h5>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  followingData: state.followReducer.following,
  user: state.auth.user.username
});

const mapDispatchToProps = dispatch => ({
  // myFollowers: (username) => {
  //   dispatch(getMyFollowersActions(username));
  // },
  myFollowing: (username) => {
    dispatch(getMyFollowingActions(username));
  }
});
export default
connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayFollow);
