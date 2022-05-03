module.exports = {
  moduleDirectories: ['node_modules', './'],
  modulePaths: ['node_modules', './'],
  preset: 'ts-jest',
  projects: ['services/budget-helper-api'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  verbose: true,
};
