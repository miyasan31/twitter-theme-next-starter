module.exports = {
  env: { browser: true, es2021: true, node: true, jest: true },
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "./tsconfig.json" },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: ["simple-import-sort", "import-access"],
  rules: {
    "linebreak-style": ["error", "unix"],
    "comma-dangle": "off",
    "no-undef": "warn",
    "no-console": ["warn", { allow: ["warn", "info", "error"] }],
    "no-restricted-syntax": ["error", { selector: "TSEnumDeclaration", message: "Don't declare enums" }],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "func-style": ["error", "expression"],
    "no-use-before-define": ["off", { paths: [{ name: "react", importNames: ["default"] }] }],

    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "on",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],

    "import/newline-after-import": "error",
    "import/no-default-export": "error",

    "import-access/jsdoc": "error",

    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["typeLike"],
        format: ["PascalCase"],
      },
      {
        selector: ["function", "method"],
        format: ["camelCase"],
      },
      {
        selector: ["variable", "parameter"],
        types: ["boolean", "string", "number", "array"],
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has", "no"],
        filter: { regex: "^_", match: false },
      },
    ],

    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  overrides: [
    {
      files: ["src/pages/*", "src/pages/*"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      files: ["**/*.spec.js", "**/*.spec.jsx"],
      env: { jest: true },
    },
  ],
};
