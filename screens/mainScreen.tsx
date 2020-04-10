import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { GameContext } from "../stateHandling/Context";
import { fetchMe } from "../util/db";
import CourseSelector from "../components/courseSelector";
import PlayerSelector from "../components/playerSelector";

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
      <Text>Golf Card</Text>
      <CourseSelector />
      <PlayerSelector />
      <Button
        title="Play"
        onPress={() => {
          dispatch({ type: "start_game", numberOfHoles: 9 });
          props.navigation.navigate("GameScreen");
        }}
      />
      <Button
        title="History"
        onPress={() => {
          props.navigation.navigate("ScoreHistory");
        }}
      />
      <Button
        title="Settings"
        onPress={() => {
          props.navigation.navigate("Settings");
        }}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
