import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { startVerifyEmail } from '../../actions/index';

/**
 * @class SignUpForm
 */
export class VerifyEmail extends Component {
  /**
 * @returns {*} - state
 */
  componentDidMount() {
    this.emailCheckToken();
  }

  emailCheckToken = () => {
    const { location } = this.props;
    const emailToken = location.search.split('=')[1];
    this.setState(() => ({ emailToken }));
    const { startVerifyEmailAction } = this.props;
    startVerifyEmailAction(emailToken);
  }

  /**
 * @returns {*} - state
 */
  render() {
    const { success } = this.props;
    if (success) {
      return <Redirect to="/users/login" />;
    }
    return (
      <div>
        <div>
          <h1>Verification Page</h1>
        </div>
      </div>
    );
  }
}

VerifyEmail.propTypes = {
  startVerifyEmailAction: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired,
  success: PropTypes.string, // eslint-disable-line
};

const mapStateToProps = state => ({
  success: state.verifyEmail.success,
});

export default connect(mapStateToProps, { startVerifyEmailAction: startVerifyEmail })(VerifyEmail);
