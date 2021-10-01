module.exports = {
  preset: ["react-native", "ts-jest"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js",
    "./jest-setup.js",
  ],
  automock: false,
  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!variables/.*)",
    "node_modules/(?!(jest-)?react-native|@react-native-community|react-navigation|@react-navigation/.*|react-native-button|my-project|react-native-gesture-handler|react-native|@react-navigation|react-native-router-flux|react-native-raw-bottom-sheet|react-native-responsive-screen|react-native-status-bar-height)",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/assetsTransformer.js",
    "\\.(css|less)$": "<rootDir>/assetsTransformer.js",
  },
};
