module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-paper/babel",
    ["@babel/plugin-transform-private-methods", { loose: true }],
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          tests: ["./tests/"],
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@stacks": "./src/stacks",
          "@shared": "./src/shared",
          "@containers": "./src/containers",
          "@hooks": "./src/hooks",
          "@Store": "./src/Store",
          "@api": "./src/api",
        },
        loose: true,
      },
    ],
  ],
};
