import Validator from 'validatorjs';

/**
 * @class SignUpInputValidation
 */
class EditProfileValidate {
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
      firstname, lastname, bio
    } = userInput;

    const validation = new Validator(
      {
        firstname,
        lastname,
        bio
      },
      {
        firstname: 'required|string|min:2|max:40',
        lastname: 'required|string|min:2|max:40',
        bio: 'required|string|min:10|max:300'
      },
    );

    const isValid = false;

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

export default EditProfileValidate;
