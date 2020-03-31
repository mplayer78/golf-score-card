import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Chaddy</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    width: "100%",
    height: 84,
    left: 0,
    top: 0,
    backgroundColor: "#4F4F4F",
    alignItems: "center",
    justifyContent: "flex-end"
  }
  // headerText: {
  //   fontFamily: "open-sans",
  //   fontStyle: "normal",
  //   textTransform: "uppercase",
  //   fontSize: 36,
  //   lineHeight: 56,
  //   textAlign: "center",

  //   /* Gray 6 */

  //   color: "#F2F2F2"
  // }
});
