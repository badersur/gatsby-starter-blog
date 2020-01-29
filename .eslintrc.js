module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",

        "plugin:import/warnings",
        "plugin:import/errors",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",

        "prettier",
        "plugin:prettier/recommended",
        "prettier/react",
        "prettier/@typescript-eslint",
    ],
    globals: {
        __PATH_PREFIX__: true,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "prettier/prettier": "error",

        "import/extensions": ["error", "never", { json: "always" }],

        "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
        "react/prefer-stateless-function": "warn",
        "react/destructuring-assignment": "warn",

        "@typescript-eslint/camelcase": "warn",
        "@typescript-eslint/ban-ts-ignore": "warn",
    },
    overrides: [
        {
            files: ["*.tsx"],
            parser: "@typescript-eslint/parser",
            plugins: ["react"],
            rules: {
                "react/prop-types": "off",
            },
        },
    ],
};
