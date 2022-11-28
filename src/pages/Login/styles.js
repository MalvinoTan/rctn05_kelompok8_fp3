import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "../../utils";

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    flex: 1,
    position: "relative",
  },
  card: {
    borderRadius: 10,
    flex: 0.8,
    padding: 20,
    justifyContent: "center",
  },
  card_title: {
    fontSize: windowWidth * 0.08,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input_email: {
    borderRadius: 50,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input_password: {
    borderRadius: 50,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btn_login: (pressed) => ({
    backgroundColor: pressed ? "#0583d2" : null,
    borderRadius: 50,
    borderColor: "#0583d2",
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }),
  text_btn_login: {
    fontSize: windowWidth * 0.045,
    fontWeight: "bold",
  },
});

export default styles;
