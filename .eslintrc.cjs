module.exports = {
  root: true,
  env: {
    browser: true,
    es2024: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:react/recommended',
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'plugin:react/jsx-runtime',
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
  plugins: ["@typescript-eslint", "react", "prettier"],
  ignorePatterns: [
    "node_modules",
    "dist",
    ".eslintrc.cjs",
    "vite-env.d.ts",
    "vite.config.ts",
  ],
  rules: {
    quotes: ["error", "single"],
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
        ignoreConsecutiveComments: true,
      },
    ],
    curly: ["error", "multi"],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
