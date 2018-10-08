import Validator from 'validatorjs';

/**
 * @class SignUpInputValidation
 */
class SignUpInputValidation {
  /**
   * validate user input on sign up
   *
   * @param {object} userInput
   *
   * @returns {boolean} true
   * @returns {object} errors
   */
  static InputValidation(userInput) {
    const {
      username, email, password, password_confirmation
    } = userInput;

    const validation = new Validator(
      {
        username,
        email,
        password,
        password_confirmation
      },
      {
        username: 'required|string|min:2|max:40',
        email: 'required|string|email',
        password: 'required|min:8|max:40|confirmed',
        password_confirmation: 'required'
      },
    );
    let isValid = false;

    if (validation.passes()) {
      return {
        isValid: true
      };
    }

    const errors = validation.errors.all();
    return {
      isValid,
      errors
    };
  }
}

export default SignUpInputValidation;
