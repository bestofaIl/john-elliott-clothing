module.exports = {
    extends: [
        "airbnb",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "react-hooks"],
    rules: {
        "react/jsx-indent": [2, 4],
        indent: ["error", 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-filename-extension": [
            2,
            { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        ],
        "import/no-unresolved": "off",
        quotes: ["error", "double"],
        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "no-shadow": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "warn",
        "no-underscore-dangle": "off",
        "max-len": ["error", { ignoreComments: true, code: 100 }],
        "jsx-a11y/no-static-element-interactions": "off",
        "sx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "no-param-reassign": "off",
        "no-use-before-define": 0,
        "react/no-unstable-nested-components": 0, // fix later
        "global-require": 0,
    },
    globals: {
        __IS_DEV__: true,
    },

    overrides: [
        {
            files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
                "max-len": "off",
            },
        },
    ],
};
