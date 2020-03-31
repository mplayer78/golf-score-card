import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GameScreenStyles = StyleSheet.create({
  // outerContainer: {
  //   minHeight: 100
  // },
  gridContainer: {
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 24
  },
  header: {
    minHeight: 25,
    flex: 1
  },
  footer: {
    minHeight: 75,
    flex: 3
  },
  holeScore: {
    minHeight: 100
  },
  notFocussed: {
    backgroundColor: "rgba(28, 158, 103, 0.09)"
  },
  focussed: {
    backgroundColor: "rgba(28, 158, 103, 0.18)"
  },
  first: {
    flex: 3,
    marginEnd: 5,
    justifyContent: "center"
  },
  second: {
    flex: 2,
    justifyContent: "center"
  },
  third: {
    flex: 2,
    justifyContent: "center"
  },
  fourth: {
    flex: 5,
    marginStart: 5,
    justifyContent: "center"
  },
  fifth: {
    flex: 3,
    justifyContent: "center"
  },
  input: {
    backgroundColor: "#fdfffd",
    flex: 1,
    margin: 10,
    textAlign: "center"
  },
  button: {
    backgroundColor: "#828282",
    flex: 1,
    margin: 10,
    borderRadius: 400
  }
});

export default GameScreenStyles;
