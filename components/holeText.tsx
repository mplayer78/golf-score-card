import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { textStyles } from "../styles/textStyles";

const HoleText = ({ children }) => {
  return <Text style={textStyles.holeText}>{children}</Text>;
};

export default HoleText;
