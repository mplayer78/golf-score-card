import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { GameContext } from "../stateHandling/Context";
import { fetchMe } from "../util/db";

const MainScreen = (props) => {
  const { state, dispatch } = useContext(GameContext);
  useEffect(() => {
    async function getData() {
      try {
        const dbResult = await fetchMe();
        if (dbResult.rows._array.length < 1) {
          dispatch({ type: "no_user" });
        }
        dispatch({ type: "get_me", data: dbResult.rows._array });
      } catch (err) {
        console.log("err", err);
        throw err;
      }
    }
    getData();
  }, []);
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
      <Button
        title="Score History"
        onPress={() => {
          props.navigation.navigate("ScoreHistory");
        }}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
