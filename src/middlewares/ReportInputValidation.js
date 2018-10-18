import Validator from 'validatorjs';

/**
 * @class ReportValidation
 */
class ReportValidation {
  /**
   * @description validate report input
   *
   * @param {object} reportInput
   * @param {object} res
   * @param {func} next
   *
   * @return {void}
   */
  static validateReport(reportInput) {
    const { details, categoryId } = reportInput;

    Validator.register(
      'positiveInt', value => value > 0,
      'The comment :attribute must be a positive integer',
    );

    const data = {
      categoryId,
      details,
    };

    const rules = {
      categoryId: 'required|integer|positiveInt',
      details: 'required|max:1000|min:10',
    };

    const message = {
      'required.categoryId': 'The :attribute field is required.',
      'integer.categoryId': 'The :attribute must be an integer.',
      'positiveInt.categoryId': 'The report :attribute must be a positive integer.',
      'required.details': 'The :attribute field is required.',
      'max.details': 'The :attribute is too long. Max length is :max characters.',
      'min.details': 'The :attribute is too short. Min length is :min characters.',
    };

    const validation = new Validator(data, rules, message);

    let isValid = false;

    if (validation.passes()) {
      isValid = true;
      return {
        isValid
      };
    }

    const errors = validation.errors.all();
    return {
      isValid,
      errors
    };
  }
}

export default ReportValidation;
