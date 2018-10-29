import React from 'react';
import PropTypes from 'prop-types';

const Followers = ({ followers }) => (
  <div className="modal fade" id="followers" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Followers</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        followers
        </div>
      </div>
    </div>
  </div>
);

Followers.propTypes = {
  users: PropTypes.shape({}),
};

export default Followers;
