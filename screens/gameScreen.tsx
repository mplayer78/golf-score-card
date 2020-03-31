import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Modal
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { GameContext } from "../stateHandling/GameContext";
import HoleScore from "../components/holeScore";
import HoleScoreHeader from "../components/holeScoreHeader";
import ScoreFooter from "../components/scoreFooter";

const GameScreen = () => {
  const { state, dispatch } = useContext(GameContext);
  console.log("state from gamescreen", state);
  return (
    <>
      <HoleScoreHeader />
      <View style={{ flex: 20 }}>
        <ScrollView>
          {state.holes.map((v, i) => (
            <HoleScore
              {...v}
              key={i}
              prevNotFilled={state.currentHole > v.holeNo && v.score < 1}
            />
          ))}
        </ScrollView>
      </View>
      <Modal>
        <View>
          <Text>Here's a Modal</Text>
        </View>
      </Modal>
      <ScoreFooter />
    </>
  );
};

export default GameScreen;
