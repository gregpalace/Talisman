module.exports = {
  verbose: true,
  preset: 'ts-jest/presets/js-with-ts',
  setupFiles: ['<rootDir>/__tests__/setup/setupEnzyme.ts'],
  roots: ['<rootDir>/__tests__'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: [
    '<rootDir>/client/assets/',
    '<rootDir>/__tests__/setup/',
  ],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'css', 'json', 'node'],
  collectCoverage: true,
};
