import React, { useState, useReducer, useEffect } from "react";
import { StyleSheet } from "react-native";
import { AppLoading } from "expo";
import ScreensNavigator from "./navigation/golfNav";
import { ErrorBoundary } from "./util/ErrorBoundary";
import { reducer } from "./stateHandling/reducer";
import { uiReducer } from "./stateHandling/uiReducer";
import { GameContext, UIContext } from "./stateHandling/Context";
import { initialGameState, initialUIState } from "./stateHandling/initialState";
import { fetchFonts } from "./util/fetchFonts";
import * as Font from "expo-font";
import { init } from "./util/db";
const fetchMyFonts = () => {
  return Font.loadAsync({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    RobotoBlack: require("./assets/fonts/Roboto-Black.ttf"),
    RobotoBlackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoBoldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
    RobotoItalic: require("./assets/fonts/Roboto-Italic.ttf"),
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoLightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoMediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-Thin.ttf"),
    RobotoThinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf"),
  });
};

init()
  .then(() => {
    console.log("initialised database");
  })
  .catch((err) => {
    console.log("database initialisation failed");
    console.error(err);
  });

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialGameState);
  const [uiState, uiDispatch] = useReducer(uiReducer, initialUIState);
  // useEffect(() => {
  //   async function getFonts() {
  //     return fetchMyFonts();
  //   }
  //   getFonts().then(result => {
  //     setDataLoaded(true);
  //   });
  // }, []);
  // if (!dataLoaded) {
  //   return <AppLoading />;
  // }
  return (
    <ErrorBoundary>
      <GameContext.Provider value={{ state, dispatch }}>
        <UIContext.Provider value={{ uiState, uiDispatch }}>
          <ScreensNavigator />
        </UIContext.Provider>
      </GameContext.Provider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // fontFamily: Font.isLoaded("RobotoMedium") ? "RobotoMedium" : "Helvetica",
    fontSize: 36,
  },
});
