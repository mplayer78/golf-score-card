import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const PlayerSelector = () => {
  return (
    <View>
      <Text>Selected Player</Text>
      <Text>(me) Matthew Player</Text>
      <Button
        title="+ Choose Other Player"
        onPress={() => {
          console.log("other player clicked");
        }}
      />
    </View>
  );
};

export default PlayerSelector;

const styles = StyleSheet.create({});
