import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "../screens/mainScreen";
import GameScreen from "../screens/gameScreen";
import SummaryScreen from "../screens/summaryScreen";
import ScoreHistory from "../screens/scoreHistory";
import Settings from "../screens/settings";
import colors from "../styles/colors";
import AddCourse from "../screens/addCourse";
import AddPlayer from "../screens/addPlayer";

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
          options={{ title: "Main" }}
        />
        <Screen
          name="GameScreen"
          component={GameScreen}
          options={{ title: "Game" }}
        />
        <Screen
          name="ScoreHistory"
          component={ScoreHistory}
          options={{ title: "History" }}
        />
        <Screen
          name="SummaryScreen"
          component={SummaryScreen}
          options={{ title: "Summary" }}
        />
        <Screen
          name="Settings"
          component={Settings}
          options={{ title: "Settings" }}
        />
        <Screen
          name="AddCourse"
          component={AddCourse}
          options={{ title: "Add Course" }}
        />
        <Screen
          name="AddPlayer"
          component={AddPlayer}
          options={{ title: "Add Player" }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default GolfNav;
