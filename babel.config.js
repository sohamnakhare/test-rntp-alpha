module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // other plugins here...
    'react-native-worklets/plugin', // 👈 must be last
  ],
};
