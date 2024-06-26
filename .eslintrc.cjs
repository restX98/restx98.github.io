/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  ignorePatterns: ["out", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: { version: "detect" },
  },
  rules: {
    "@next/next/no-img-element": "off",
    "tailwindcss/no-custom-classname": "off",
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "next/link",
            message: "Please import from `@/navigation` instead.",
          },
          {
            name: "next/navigation",
            importNames: [
              "redirect",
              "permanentRedirect",
              "useRouter",
              "usePathname",
            ],
            message: "Please import from `@/navigation` instead.",
          },
        ],
        patterns: [
          {
            group: ["./", "../"],
            message: "Relative imports are not allowed.",
          },
        ],
      },
    ],
  },
};
