import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth * 0.05,
    flex: 1,
  },
  text_notfound: {
    fontSize: windowWidth * 0.05,
    textAlign: "center",
    marginTop: windowHeight * 0.1,
  },
});

export default styles;
