import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from "react-native";
import { GameContext, UIContext } from "../stateHandling/Context";

const ScoreFooter = () => {
  const { state, dispatch } = useContext(GameContext);
  const { uiState, uiDispatch } = useContext(UIContext);
  const allComplete: boolean = state.holes.reduce((a, v) => {
    return v.score < 1 ? false : a;
  }, true);
  if (!allComplete) {
    return (
      <>
        <View style={{ ...styles.footer, ...styles.notDone }}>
          <View style={{ flex: 4 }}>
            <Text style={styles.footerText}>Score</Text>
          </View>
          <View
            style={{
              flex: 3
            }}
          >
            <TextInput
              style={{ fontSize: 72, color: "white", fontWeight: "800" }}
              value={state.holes.reduce((a, v, i) => a + v.score, 0) + ""}
            />
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={{ ...styles.footer, ...styles.done }}>
      <TouchableHighlight
        onPress={() => uiDispatch({ type: "show_confirmation_modal" })}
      >
        <View
          style={{
            minHeight: 50
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "800",
              fontSize: 56,
              color: "#4F4F4F",
              textTransform: "uppercase"
            }}
          >
            Finished?
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default ScoreFooter;

const styles = StyleSheet.create({
  done: {
    backgroundColor: "#6FCF97"
  },
  notDone: {
    backgroundColor: "#4F4F4F",
    width: "100%",
    flexDirection: "row"
  },
  footer: {
    flex: 1,
    minHeight: 125,
    padding: 40
  },
  footerText: {
    fontSize: 36,
    fontWeight: "700",
    color: "white",
    textTransform: "uppercase",
    textAlign: "right",
    margin: 10
  }
});
