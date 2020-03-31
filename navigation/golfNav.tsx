import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MainScreen from "../screens/mainScreen";
import GameScreen from "../screens/gameScreen";

const ScreensNavigator = createStackNavigator({
  MainScreen,
  GameScreen
});

export default createAppContainer(ScreensNavigator);
