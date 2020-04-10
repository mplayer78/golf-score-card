import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HoleSummary = (props) => {
  console.log("props ", props);
  return (
    <View>
      <Text>
        Hole {props.holeNo < 10 && " "}
        {props.holeNo} (par {props.par})... {props.score}
      </Text>
    </View>
  );
};

export default HoleSummary;

const styles = StyleSheet.create({});
