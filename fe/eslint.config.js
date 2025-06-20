import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint/config"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import ts from "typescript"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { ts },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    settings: { react: { version: "detect" } },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended, // Must be last
])
