const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    clearMocks: true,
};

module.exports = createJestConfig(customJestConfig);
