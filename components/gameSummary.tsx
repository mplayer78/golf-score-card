import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GameContext } from "../stateHandling/Context";

const GameSummary = () => {
  const { state, dispatch } = useContext(GameContext);
  console.log("state", state);
  return (
    <View>
      <Text>Total score for whole round: {state.totalScore}</Text>
    </View>
  );
};

export default GameSummary;

const styles = StyleSheet.create({});
