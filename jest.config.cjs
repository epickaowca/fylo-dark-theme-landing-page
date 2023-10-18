module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.svg": "<rootDir>/src/__mocks__/fileMock.ts",
    "\\.jpg": "<rootDir>/src/__mocks__/fileMock.ts",
    "\\.png": "<rootDir>/src/__mocks__/fileMock.ts",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
