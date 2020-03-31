import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GameScreenStyles from "../styles/gameScreenStyles";
import HeaderText from "./headerText";

const HoleScoreHeader = () => {
  return (
    <View
      style={{ ...GameScreenStyles.gridContainer, ...GameScreenStyles.header }}
    >
      <View style={GameScreenStyles.first}>
        <HeaderText>Hole</HeaderText>
      </View>
      <View style={GameScreenStyles.second}>
        <HeaderText>Par</HeaderText>
      </View>
      <View style={GameScreenStyles.third}>
        <HeaderText>S.I.</HeaderText>
      </View>
      <View style={GameScreenStyles.fourth}>
        <HeaderText>Score</HeaderText>
      </View>
      <View style={GameScreenStyles.fifth}></View>
    </View>
  );
};

export default HoleScoreHeader;
