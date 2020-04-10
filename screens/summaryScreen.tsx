import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { GameContext } from "../stateHandling/Context";
import HoleSummary from "../components/holeSummary";
import GameSummary from "../components/gameSummary";

const SummaryScreen: React.FC = props => {
  const { state, dispatch } = useContext(GameContext);
  return (
    <View>
      <Text>Hole Summary</Text>
      {state.holes.map(v => (
        <HoleSummary {...v} key={v.holeNo} />
      ))}
      <GameSummary />
      <Button
        title="Back to the main screen"
        onPress={() => props.navigation.navigate("MainScreen")}
      />
    </View>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({});
