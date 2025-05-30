export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': [
      'ts-jest', // Transformer for TypeScript files
      {
        useESM: true, // Enable ES Modules support for TypeScript
      },
    ],
  },
  extensionsToTreatAsEsm: ['.ts'], // Treat .ts files as ES modules
  globals: {
    'ts-jest': {
      useESM: true, // Enable ES Modules with ts-jest
    },
  },
  moduleFileExtensions: ['ts', 'js'], // Include both .ts and .js extensions for Jest
  testMatch: ['**/*.test.ts'], // Ensure Jest picks up .test.ts files for tests
};
