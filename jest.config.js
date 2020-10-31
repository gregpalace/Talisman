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
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/setup/fileMock.ts',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'css', 'json', 'node'],
  collectCoverage: true,
};
