import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fetchScorecards } from "../util/db";
import { GameContext } from "../stateHandling/Context";

const ScoreHistory = () => {
  const { state, dispatch } = useContext(GameContext);
  useEffect(() => {
    async function getData() {
      try {
        const dbResult = await fetchScorecards();
        dispatch({ type: "get_history", data: dbResult.rows._array });
      } catch (err) {
        console.log("err", err);
        throw err;
      }
    }
    getData();
  }, []);
  return (
    <View>
      <Text>{state.history.map(v => `${v.date} : ${v.score}\n`)}</Text>
    </View>
  );
};

export default ScoreHistory;

const styles = StyleSheet.create({});
