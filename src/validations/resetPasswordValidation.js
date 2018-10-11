import Validator from 'validatorjs';
/**
 * @class UserInputValidation
 */
class resetPasswordValidations {
  /**
   * validate user input for passwordReset
   *
   * @param {object} state
   *
   * @return {void}
   */
  static emailInputValidation(state) {
    const { email } = state;
    const validation = new Validator(
      {
        email
      },
      {
        email: 'required|email',
      },
      {
        'required.email':
          'This :attribute field is required.',
        'email.email': 'Please enter a valid :attribute address.',
      }
    );
    const validationErrors = {
      hasErrors: false,
      error: {},
    };
    if (validation.fails()) {
      validationErrors.error = validation.errors.all();
      validationErrors.hasErrors = true;
      return validationErrors;
    }
    return validationErrors;
  }

  /**
   * validate user input for passwordReset
   *
   * @param {object} state
   *
   * @return {void}
   */
  static passwordInputValidation(state) {
    const {
      passwordtoken,
      password,
      password_confirmation // eslint-disable-line
    } = state;
    const validation = new Validator(
      {
        passwordtoken,
        password,
        password_confirmation // eslint-disable-line
      },
      {
        passwordtoken: 'required',
        password: 'required|min:8|max:40|confirmed',
        password_confirmation: 'required'
      },
      {
        'required.passwordtoken': ':attribute field is required.',
        'required.password': ':attribute field is required.',
        'min.password':
          'The :attribute is too short. Min length is :min characters.',
        'max.password':
          'The :attribute is too long. Max length is :max characters.',
        'confirmed.password': 'Password Mismatch.'
      }
    );
    const validationErrors = {
      hasErrors: false,
      error: {},
    };
    if (validation.fails()) {
      validationErrors.error = validation.errors.all();
      validationErrors.hasErrors = true;
      return validationErrors;
    }
    return validationErrors;
  }
}

export default resetPasswordValidations;
