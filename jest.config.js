module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/setup-tests.ts"],
  moduleNameMapper: {
    "test-utils": "<rootDir>/test-utils",
    "test-utils/(.*)": "<rootDir>/test-utils/$1",
    "design-system": "<rootDir>/components/DesignSystem",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
};
