import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { textStyles } from "../styles/textStyles";

const AppButton = props => {
  console.log("children ", props.children);
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View
        style={{
          backgroundColor: "#f1f1b0",
          padding: 10,
          marginTop: 20,
          alignItems: "center",
          borderRadius: 20
        }}
      >
        <Text style={textStyles.confirmationText}>{props.children}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default AppButton;

const styles = StyleSheet.create({});
