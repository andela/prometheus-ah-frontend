import ReportValidation from '../../middlewares/ReportInputValidation';

const { validateReport } = ReportValidation;

describe('Login input Validations', () => {
  test('should return an error when invalid data is sent', () => {
    const invalidData = { categoryId: '', details: '' };
    const result = validateReport(invalidData);
    expect(result.isValid).toEqual(false);
  });
  test('should return true for valid data', () => {
    const validData = { categoryId: 1, details: 'new report for testing validator' };
    const result = validateReport(validData);
    expect(result.isValid).toEqual(true);
  });
});
