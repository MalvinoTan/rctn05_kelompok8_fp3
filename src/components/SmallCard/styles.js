import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "../../utils";

const styles = StyleSheet.create({
  card: {
    marginBottom: windowHeight * 0.02,
    flexDirection: "row",
  },
  image: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.33,
    borderRadius: 10,
  },
  card_body: {
    paddingLeft: 10,
    flex: 1,
  },
  text_name: {
    fontSize: windowWidth * 0.04,
    fontWeight: "bold"
  },
  text_location: {
    fontSize: windowWidth * 0.03,
  },
  star_icons: {
    flexDirection: "row",
    marginTop: windowHeight * 0.01,
  },
});

export default styles;
