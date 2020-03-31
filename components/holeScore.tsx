import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import GameScreenStyles from "../styles/gameScreenStyles";
import HoleText from "./holeText";
import { GameContext } from "../stateHandling/GameContext";
import { textStyles } from "../styles/textStyles";
import PlusButton from "../imageComponents/plusButton.js";

const HoleScore = ({ holeNo, par, score, strokeIndex, prevNotFilled }) => {
  const { state, dispatch } = useContext(GameContext);
  // console.log("state.holes", state.holes);
  // console.log("typeof score ", typeof ("" + score));
  const currentFocus =
    holeNo === state.currentHole
      ? GameScreenStyles.focussed
      : GameScreenStyles.notFocussed;

  return (
    <>
      <View
        style={{
          ...GameScreenStyles.gridContainer,
          ...GameScreenStyles.holeScore
        }}
      >
        <View style={{ ...GameScreenStyles.first, ...currentFocus }}>
          <HoleText>{holeNo}</HoleText>
        </View>
        <View style={{ ...GameScreenStyles.second, ...currentFocus }}>
          <HoleText>{par}</HoleText>
        </View>
        <View style={{ ...GameScreenStyles.third, ...currentFocus }}>
          <HoleText>{strokeIndex}</HoleText>
        </View>
        <View style={{ ...GameScreenStyles.fourth, ...currentFocus }}>
          <TextInput
            style={{
              ...GameScreenStyles.input,
              ...textStyles.holeText,
              ...(prevNotFilled ? textStyles.alertFill : {})
            }}
            keyboardType="number-pad"
            returnKeyType="done"
            value={score === 0 ? "" : "" + score}
            onChangeText={e => {
              dispatch({
                type: "set_hole_score",
                holeNo,
                score: e
              });
            }}
            onFocus={() => dispatch({ type: "set_focus", holeNo })}
          />
        </View>
        <View style={{ ...GameScreenStyles.fifth, ...currentFocus }}>
          <TouchableOpacity
            style={GameScreenStyles.button}
            onPress={() => dispatch({ type: "increment_hole_score", holeNo })}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HoleScore;
