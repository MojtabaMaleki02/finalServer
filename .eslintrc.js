module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "jest": true
  },
  "extends": [
      "plugin:react/recommended",
      "standard",
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/recommended"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly",
      "React": "writable"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "@typescript-eslint"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
          "delimiter": "none",
          "requireLast": true
      },
      "singleline": {
          "delimiter": "semi",
          "requireLast": false
      }
  }],
  }
};
