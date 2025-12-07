import js from "@eslint/js";
import astroParser from "astro-eslint-parser";
import astroPlugin from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...astroPlugin.configs.recommended,
    {
        files: ["**/*.{js,jsx,ts,tsx,astro}"],
        plugins: {
            react,
            "react-hooks": reactHooks,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            // React rules
            "react/react-in-jsx-scope": "off", // Not needed in modern React
            "react/prop-types": "off", // Using TypeScript
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // TypeScript rules
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/no-explicit-any": "warn",

            // General rules
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "prefer-const": "error",
            "no-var": "error",
        },
    },
    {
        files: ["**/*.astro"],
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
            },
        },
    },
    {
        ignores: ["dist/", "node_modules/", ".astro/", "public/", "*.config.js", "*.config.mjs"],
    },
];
