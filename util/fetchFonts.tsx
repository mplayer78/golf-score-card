import * as Font from "expo-font";

export function fetchFonts() {
  Font.loadAsync({
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf")
  });
}
