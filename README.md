# Navigators proof of concept

## The Walkthrough Video

![](walkthrough.mov)

## Random notes below

Built using:

- https://reactnative.dev/docs/environment-setup#creating-a-new-application
- partially with https://medium.com/@davidjasonharding/developing-a-react-native-app-on-an-m1-mac-without-rosetta-29fcc7314d70
  - but not all of the above is necessary for M1, here's what did it:
  - ruby v3, then cocoapods, and make sure zshrc has the right incantations

Useful commands:

- npx react-native init Navigators2 --template react-native-template-typescript
- npx react-native start
- npx react-native run-ios
- npx pod-install ios (via react-navigation docs)
