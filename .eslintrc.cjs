module.exports = {
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    "eslint-config-prettier",
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      "eslint-import-resolver-custom-alias": {
        alias: {
          "@/api": "./src/services/api",
          "@/pages": "./src/pages",
          "@/endpoints": "./src/services/endpoints",
          "@/common": "./src/components/common",
          "@/components": "./src/components",
          "@/helpers": "./src/utils/helpers",
          "@/types": "./src/utils/types",
          "@/styles": "./src/styles",
          "@/mocks": "./src/mocks",
          "@/config": "./src/config",
          "@/assets": "./src/assets",
          "@/routes": "./src/routes",
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        packages: ["packages/*"],
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  rules: {
    // Add your own rules here to override ones from the extended configs.
    // Suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-debugger": "off",
  },
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["/*", "!/src", "**/*.css", "**/*.scss", "**/*.md"],
  root: true,
}
