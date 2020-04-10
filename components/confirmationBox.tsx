import React, { useContext } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import AppButton from "./appButton";
import { textStyles } from "../styles/textStyles";
import { UIContext, GameContext } from "../stateHandling/Context";
import { insertScorecard } from "../util/db";

const ConfirmationBox = props => {
  const { uiState, uiDispatch } = useContext(UIContext);
  const { state, dispatch } = useContext(GameContext);
  return (
    <Modal
      visible={uiState.showConfirmationModal}
      animationType="slide"
      transparent={true}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff40",
          padding: 50
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 50,
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 20,
            shadowRadius: 20,
            borderRadius: 20
          }}
        >
          <Text style={textStyles.confirmationText}>
            Are you sure you have finished the round?
          </Text>
          <AppButton
            onPress={async () => {
              dispatch({ type: "finish_game" });
              uiDispatch({ type: "hide_confirmation_modal" });
              props.navigation.navigate("SummaryScreen");
              try {
                const d = new Date();
                const dbResult = await insertScorecard(
                  d.toDateString(),
                  state.totalScore
                );
              } catch (err) {
                console.error(err);
              }
            }}
          >
            Yes
          </AppButton>
          <AppButton
            onPress={() => uiDispatch({ type: "hide_confirmation_modal" })}
          >
            No (go back)
          </AppButton>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationBox;

const styles = StyleSheet.create({
  confirmationText: {
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase"
  }
});
