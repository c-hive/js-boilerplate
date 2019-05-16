module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: [
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")], // https://stackoverflow.com/q/39114446/2771889
    "import/prefer-default-export": 0, // https://stackoverflow.com/q/54245654/2771889
    "react/sort-comp": "off", // https://github.com/yannickcr/eslint-plugin-react/issues/1214
  }
};
