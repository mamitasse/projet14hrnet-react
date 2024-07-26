module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@testing-library/jest-dom$': '@testing-library/jest-dom/dist/index.js'
  }
};
