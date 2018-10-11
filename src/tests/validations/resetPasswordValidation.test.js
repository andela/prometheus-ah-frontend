import resetPasswordValidations from '../../validations/resetPasswordValidation';
import mockData from '../__mocks__/mockData';

const { emailInputValidation, passwordInputValidation } = resetPasswordValidations;

describe('Email input Validations', () => {
  test('should return an error when invalid data is sent', () => {
    const { invalidEmail } = mockData;
    const result = emailInputValidation(invalidEmail);
    expect(result.hasErrors).toEqual(true);
  });

  test('should not return an error when valid data is sent', () => {
    const { signUpDetails } = mockData;
    const email = { email: signUpDetails.email };
    const result = emailInputValidation(email);
    expect(result.hasErrors).toEqual(false);
    expect(result.error).toEqual({});
  });
});

describe('Password Input Validations', () => {
  test('should return an error when invalid data is sent', () => {
    const { fakePassword, password_confirmation, passwordtoken } = mockData; // eslint-disable-line
    const result = passwordInputValidation({ fakePassword, password_confirmation, passwordtoken });
    expect(result.hasErrors).toEqual(true);
  });

  test('should not return an error when valid data is sent', () => {
    const { password, password_confirmation, passwordtoken } = mockData; // eslint-disable-line

    const result = passwordInputValidation({ password, password_confirmation, passwordtoken });
    expect(result.hasErrors).toEqual(false);
    expect(result.error).toEqual({});
  });
});
