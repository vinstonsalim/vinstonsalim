module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./vite.config.ts"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "prettier"],
  ignorePatterns: [
    "node_modules",
    "dist",
    ".eslintrc.cjs",
    "vite-env.d.ts",
    "vite.config.ts",
  ],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "spaced-comment": [
      "error",
      "always",
      { exceptions: ["-", "+"], markers: ["!", "TODO", "?", "//"] },
    ],
    "capitalized-comments": [
      "error",
      "always",
      {
        ignorePattern: "pragma|ignored",
        ignoreInlineComments: true,
      },
    ],
    curly: ["error", "multi"],
  },
};
