module.exports = {
    env: {
        "node": true,
        "browser": true,
        "es6": true,
        "jest/globals": true
    },
    parser: "@babel/eslint-parser",
    parserOptions: {
        "ecmaVersion": 11,
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    plugins: ["jest"],
    rules: {
        "react/jsx-filename-extension": 0,
        "arrow-body-style": 0,
        "react/prefer-stateless-function": 0,
        "no-trailing-spaces": 0,
        "comma-dangle": 0,
        "radix": 0,
        "max-len": [
            2,
            {
                "code": 120,
                "ignorePattern": "^import"
            }
        ],
        "jsx-a11y/label-has-for": 0,
        "class-methods-use-this": 0,
        "jsx-a11y/no-autofocus": 0
    }
};
