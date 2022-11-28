import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  card: {
    width: windowWidth * 0.4,
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: windowHeight * 0.22,
    borderRadius: 15,
  },
  card_body: {
    paddingVertical: 5,
  },
  card_title: {
    fontSize: windowWidth * 0.04,
    textAlign: "center",
  },
});

export default styles;
