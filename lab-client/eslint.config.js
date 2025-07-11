import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
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
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "quotes": ["error", "double"],
      "jsx-quotes": ["error", "prefer-double"],
      "no-tabs": "error",
      "indent": ["error", 2, { "SwitchCase": 1 }],
    },
  },
  {
    ignores: ["build/**/*", "dist/**/*", "node_modules/**/*"],
  }
);
