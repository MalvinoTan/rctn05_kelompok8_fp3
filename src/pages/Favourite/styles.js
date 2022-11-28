import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth * 0.05,
  },
  list_container: {
    marginVertical: windowHeight * 0.02,
  },
  text_not_login: {
    fontSize: windowWidth * 0.05,
    textAlign: "center",
    marginTop: windowHeight * 0.05
  },
  no_data: {
    fontSize: windowWidth * 0.05,
    textAlign: "center",
    marginTop: windowHeight * 0.05
  }
});

export default styles;
