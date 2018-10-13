import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { parse } from 'query-string';
import toastr from 'toastr';
import { socialLoginAction } from '../../actions/socialLogin';
import Footer from '../Footer';
import config from '../../config';

/**
 * @description handles social login
 * @returns {*} jsx
 *
 */
export class SocialLoginContainer extends Component {
  /**
   *
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {};
    const { match, history } = this.props;
    const { socialLogin } = match.params;
    const { code } = parse(history.location.search);
    if (!code) {
      window.location = `${config.apiUrl}/${socialLogin}`;
    }
  }

  /**
 *@description comfirms a user and redirects
 *@returns {*} obj
 */
  componentDidMount() {
    const { history, match, social } = this.props;
    const { code } = parse(history.location.search);
    const { socialLogin } = match.params;
    if (!code) return undefined;
    social(code, socialLogin).then((response) => {
      const { message } = response.data;
      if (response && (response.status === 200 || response.status === 201)) {
        toastr.success(message);
        return history.push('/');
      }
      return history.push('/');
    }).catch(error => error);
  }

  /**
 * @returns {*} jsx
 */
  render() {
    return <Footer />;
  }
}

SocialLoginContainer.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  social: PropTypes.func.isRequired,
};

const matchStateToProps = state => ({
  user: state.socialLoginReducer.user,
  error: state.socialLoginReducer.error,
});

const mapDistpatchToProps = dispatch => ({
  social: (code, socialLoginProv) => dispatch(socialLoginAction(code, socialLoginProv)),
});

export default withRouter(connect(matchStateToProps, mapDistpatchToProps)(SocialLoginContainer));
