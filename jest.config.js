module.exports = {
  setupFiles: [
    'raf/polyfill',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/e2e-test/'
  ],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>./src/tests/__mocks__/fileMock.js'
  }
};
