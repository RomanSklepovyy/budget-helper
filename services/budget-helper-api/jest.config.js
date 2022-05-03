module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/services/budget-helper-api/tsconfig.json',
    },
  },
  clearMocks: true,
  moduleFileExtensions: ['js', 'json', 'ts'],
  displayName: 'API',
  moduleDirectories: ['node_modules', './'],
  modulePaths: ['node_modules', './'],
  name: 'budget-helper-api',
  rootDir: './../../',
  testMatch: ['<rootDir>/services/budget-helper-api/**/*.spec.ts'],
  coverageDirectory: '../coverage',
  collectCoverageFrom: ['**/*.(t|j)s'],
  transform: { '^.+\\.(t|j)s$': 'ts-jest' },
};
