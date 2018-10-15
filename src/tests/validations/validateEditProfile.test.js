import EditProfileValidate from '../../middlewares/EditProfileValidate';

const { InputValidation } = EditProfileValidate;

describe('Login input Validations', () => {
  it('should return an error when invalid data is sent', () => {
    const invalidData = { firstname: '', lastname: '' };
    const result = InputValidation(invalidData);
    expect(result.isValid).toEqual(false);
  });

  it('should return an true when valid data is sent', () => {
    const validData = {
      firstname: 'Mocha', lastname: 'Chai', email: 'mocha@gmail.com', bio: 'cool coding guys'
    };
    const result = InputValidation(validData);
    expect(result.isValid).toEqual(true);
  });
});
