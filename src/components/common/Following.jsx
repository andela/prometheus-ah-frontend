import React from 'react';
import PropTypes from 'prop-types';

const Following = ({ following }) => (
  <div className="modal fade" id="following" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Following</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          { `${following.authorsIFollow}` }
        </div>
      </div>
    </div>
  </div>
);

Following.propTypes = {
  users: PropTypes.shape({}),
};

export default Following;
