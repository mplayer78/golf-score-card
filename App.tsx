import React, { useState, useReducer, useEffect } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import Header from "./screens/header";
import Footer from "./screens/footer";
import { AppLoading } from "expo";
import ScreensNavigator from "./navigation/golfNav";
import { ErrorBoundary } from "./util/ErrorBoundary";
import { reducer } from "./stateHandling/reducer";
import { GameContext } from "./stateHandling/GameContext";
import { initialState } from "./stateHandling/initialState";
import { fetchFonts } from "./util/fetchFonts";
import * as Font from "expo-font";

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
    RobotoThinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf")
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function getFonts() {
      return fetchMyFonts();
    }
    getFonts().then(result => {
      setDataLoaded(true);
    });
  }, []);
  if (!dataLoaded) {
    console.log("data is not loaded");
    return <AppLoading />;
  }
  console.log("data is loaded");
  console.log(
    'Font.isLoaded("OpenSans-Regular")',
    Font.isLoaded("OpenSans-Regular")
  );
  return (
    <ErrorBoundary>
      <GameContext.Provider value={{ state, dispatch }}>
        <ScreensNavigator />
      </GameContext.Provider>
      {/* <View style={styles.container}>
        <Text style={styles.text}>Hey from Text</Text>
      </View> */}
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    // fontFamily: Font.isLoaded("RobotoMedium") ? "RobotoMedium" : "Helvetica",
    fontSize: 36
  }
});
