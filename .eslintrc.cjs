module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  env: {
    node: true,
    jest: true,
  },
  root: true,
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@typescript-eslint/eslint-plugin"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { allowTemplateLiterals: true },
    ],
  },
};
