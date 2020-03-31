import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { GameContext } from "../stateHandling/GameContext";

const MainScreen = props => {
  const { state, dispatch } = useContext(GameContext);
  return (
    <View>
      <Button
        title="9 holes"
        onPress={() => {
          dispatch({ type: "start_game", numberOfHoles: 9 });
          props.navigation.navigate("GameScreen");
        }}
      />
      <Button
        title="18 holes"
        onPress={() => {
          dispatch({ type: "start_game", numberOfHoles: 18 });
          props.navigation.navigate("GameScreen");
        }}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
