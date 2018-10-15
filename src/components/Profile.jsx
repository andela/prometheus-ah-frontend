import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routes from '../constants/routes';
import ArticleCard from './common/ArticleCard';

/**
 * Profile page
 */
class Profile extends Component {
  /**
   * render
   *
   * @return {void}
   */
  render() {
    const {
      profile, articles, followers, following, userId
    } = this.props;

    return (
      <div className="container-fluid">
        <div className="emp-profile">
          <div className="row">
            <div className="col-sm-4">
              <div className="profile-img">
                <img src={profile.image} alt="profile" height="200px" width="200px" />
              </div>
            </div>
            <div className="col-sm-8">
              <h5>
                {` ${profile.firstname}  ${profile.lastname} `}
                &nbsp;
                {
                  userId === profile.id ? (
                    <Link to={{ pathname: routes.EDIT_PROFILE_PAGE, state: { profile } }}>
                      <button className="btn btn-outline-danger btn-sm" type="button">
                        Edit Profile
                      </button>
                    </Link>) : ''
                }
              </h5>
              <p>
                <b>Email: </b>
                <span>{profile.email}</span>
              </p>
              <h6>{profile ? profile.bio : ''}</h6>
              <br />
              <p className="text-color">
                <span>{ followers.myTotalFollow ? followers.myTotalFollow : '0 ' }</span>
                Following &nbsp;&nbsp;
                <span>{ following.totalFollower ? following.totalFollower : '0 ' }</span>
                Followers
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 profile-padding">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab"
                    href="#home" role="tab" aria-controls="home" aria-selected="true"
                  >
                    Articles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab"
                    href="#profile" role="tab" aria-controls="profile" aria-selected="false"
                  >
                    Bookmarks
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <br />
                <div className="tab-pane fade show active" id="home"
                  role="tabpanel" aria-labelledby="home-tab"
                >
                  <div className="row">
                    {articles && articles.length > 0 ? articles.map(article => (
                      <div className="col-sm-6" key={article.id}>
                        <ArticleCard
                          article={article}
                        />
                      </div>
                    )) : 'You have not published any article'}
                  </div>
                </div>
                <div className="tab-pane fade" id="profile"
                  role="tabpanel" aria-labelledby="profile-tab"
                >
                  <h5>List of bookmarks</h5>
                  <h1>&nbsp;</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.shape({
  }).isRequired,
  followers: PropTypes.shape({
  }).isRequired,
  following: PropTypes.shape({
  }).isRequired,
  userId: PropTypes.number.isRequired,
  articles: PropTypes.instanceOf(Object)
};

export default Profile;
