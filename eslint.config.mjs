import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {},

    rules: {
      // ESLint
      quotes: "off",
      "no-shadow": "off",
      "no-console": "error",
      "no-unused-vars": "off",
      "no-use-before-define": "off",

      // Typescript
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/triple-slash-reference": "warn",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-object-literal-type-assertion": "off",
      "@typescript-eslint/no-explicit-any": "warn",

      // React
      "react/jsx-boolean-value": ["error", "always"],
    },
  },
];
