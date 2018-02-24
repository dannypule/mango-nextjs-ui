module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: { '^.+\\.(css|scss)$': '<rootDir>/jest.css-stub.js' }
}
