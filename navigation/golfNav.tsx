import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "../screens/mainScreen";
import GameScreen from "../screens/gameScreen";
import SummaryScreen from "../screens/summaryScreen";
import ScoreHistory from "../screens/scoreHistory";
import colors from "../styles/colors";

const { Navigator, Screen } = createStackNavigator();

const GolfNav = (props) => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? colors.primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
        }}
      >
        <Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: "Main Screen" }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default GolfNav;
