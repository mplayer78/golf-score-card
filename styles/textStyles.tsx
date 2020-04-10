import { StyleSheet } from "react-native";

export const textStyles = StyleSheet.create({
  header: {
    fontSize: 18,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "600",
    color: "#828282"
    // fontFamily: "OpenSans-Regular"
  },
  holeText: {
    fontSize: 54,
    textAlign: "center",
    fontWeight: "700",
    color: "#828282"
  },
  alertFill: {
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    borderColor: "rgba(255, 0, 0, 0.4)",
    borderWidth: 4
  },
  confirmationText: {
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase"
  }
});
