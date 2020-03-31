import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text>Hi From Footer</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    position: "absolute",
    width: "100%",
    height: 120,
    left: 0,
    bottom: 0,

    /* Gray 2 */

    backgroundColor: "#4F4F4F"
  }
});
