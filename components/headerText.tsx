import React from "react";
import { Text, View } from "react-native";
import { textStyles } from "../styles/textStyles";

const HeaderText = ({ children }) => {
  return <Text style={textStyles.header}>{children}</Text>;
};

export default HeaderText;
