module.exports = {
  // Use jsdom to simulate a browser environment
  testEnvironment: 'jest-environment-jsdom',

  // A path to a module that runs some code to configure or set up the testing framework before each test.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // A map from regular expressions to module names that allow to stub out resources with a single module.
  moduleNameMapper: {
    // Handle CSS imports (and other file types)
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },

  // **THIS IS THE KEY PART**
  // A map from regular expressions to paths to transformers.
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },

  // Ignore transforms for node_modules
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],

  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};
