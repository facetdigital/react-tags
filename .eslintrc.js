/*
    "off" or 0 - turn the rule off
    "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
*/

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    "react",
    "jsx-a11y"
  ],
  parser: "babel-eslint",
  rules: {
     // Possible Errors
    "computed-property-spacing": "off",
    "no-cond-assign": "error",
    "no-console": "off",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-dupe-keys": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": "off",
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-obj-calls": "error",
    "no-regex-spaces": "error",
    "no-reserved-keys": "off",
    "no-sparse-arrays": "error",
    "no-unreachable": "error",
    "use-isnan": "error",
    "valid-jsdoc": "warn",
    "valid-typeof": "error",
    // Variables
    "prefer-const": "error",
    "no-catch-shadow": "error",
    "no-const-assign": "error",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-shadow": "warn",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "no-var": "error",
    // Stylistic Issues
    "array-bracket-spacing": [
      0,
      "always",
      {
        "singleValue": false,
        "objectsInArrays": false,
        "arraysInArrays": false,
      },
    ],
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": "error",
    "brace-style": ["error", "stroustrup"],
    "camelcase": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "consistent-this": [2, "that"],
    "eol-last": "error",
    "func-names": [2, "as-needed"],
    "func-style": "off",
    "keyword-spacing": "error",
    "key-spacing": [
      2,
      {
        "beforeColon": false,
        "afterColon": true,
      },
    ],
    "max-nested-callbacks": "off",
    "new-cap": "off",
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "semi-spacing": [
      2,
      {
        "before": false,
        "after": true,
      },
    ],
    "no-spaced-func": "error",
    "no-ternary": "off",
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": "error",
    "no-underscore-dangle": "off",
    "object-curly-spacing": [2, "always"],
    "one-var": "off",
    "operator-assignment": [2, "always"],
    "padded-blocks": "off",
    "quotes": [2, "single"],
    "quote-props": [2, "as-needed"],
    "semi": [2, "always"],
    "sort-vars": [
      2,
      {
        "ignoreCase": true,
      },
    ],
    "space-before-blocks": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",
    "wrap-regex": "off",

    /** react rules start here **/

    "react/jsx-no-duplicate-props": 2,
    "react/no-deprecated": 1,
    "react/no-is-mounted": 2,
    "react/no-unknown-property": 1,
    "react/prop-types": 2,
    "react/no-direct-mutation-state": 2,
    "react/jsx-key": 2,
    "react/no-children-prop": 1,
    "react/display-name": 1,
    "react/no-multi-comp": 1,
    "react/sort-comp": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-typos": 2,
    "react/jsx-equals-spacing": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-vars": 1,
    "react/no-find-dom-node": 1,
    "react/no-render-return-value": 1,

    /** jsx-ally rules start here **/
    "jsx-a11y/alt-text": 2,
    "jsx-a11y/html-has-lang": 1,
    "jsx-a11y/iframe-has-title": 1,
    "jsx-a11y/click-events-have-key-events": 1
  },
  overrides: [
    {
      files: [
        "**/*.test.js"
      ],
      env: {
        jest: true // now **/*.test.js files" env has both es6 *and* jest
      },
      // Can"t extend in overrides: https://github.com/eslint/eslint/issues/8813
      // "extends": ["plugin:jest/recommended"]
      plugins: ["jest"],
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn"
      }
    }
  ],
};
