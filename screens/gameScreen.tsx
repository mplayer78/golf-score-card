import React, { useContext, useState } from "react";
import { View, ScrollView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { GameContext } from "../stateHandling/Context";
import HoleScore from "../components/holeScore";
import HoleScoreHeader from "../components/holeScoreHeader";
import ScoreFooter from "../components/scoreFooter";
import ConfirmationBox from "../components/confirmationBox";

const GameScreen = props => {
  const { state, dispatch } = useContext(GameContext);
  const [showModal, setShowModal] = useState(false);
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
      <ConfirmationBox {...props} />
      <ScoreFooter />
    </>
  );
};

export default GameScreen;
