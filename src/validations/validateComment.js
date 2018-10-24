import Validator from 'validatorjs';

/**
 * @class CommentValidation
 */
class CommentValidation {
  /**
   * @description validate comment input
   *
   * @param {object} userInput
   *
   * @return {void}
   */
  static commentValidate(userInput) {
    let isValid = false;
    const { body } = userInput;
    const data = {
      body,
    };

    const rules = {
      body: 'required|max:600',
    };

    const message = {
      'required.body': 'The comment :attribute field cannot be empty',
      'max.body': 'The comment :attribute is too long. Max length is :max characters.',
    };

    const validation = new Validator(data, rules, message);

    if (validation.passes()) {
      isValid = true;
      return { isValid };
    }

    const errors = validation.errors.all();
    return {
      isValid,
      errors
    };
  }
}

export default CommentValidation;
