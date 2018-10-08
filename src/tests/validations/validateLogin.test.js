import validateLogin from '../../vaidations/validateLogin';

const { loginInputValidation } = validateLogin;

describe('Login input Validations', () => {
  test('should return an error when invalid data is sent', () => {
    const inavlidData = { username: '', password: '' };
    const result = loginInputValidation(inavlidData);
    expect(result.isValid).toEqual(false);
  });
});
