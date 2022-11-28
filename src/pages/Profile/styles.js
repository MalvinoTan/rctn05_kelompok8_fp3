import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  card_title: {
    fontSize: windowWidth * 0.045,
    paddingBottom: windowHeight * 0.01,
    fontWeight: "bold"
  },
  logout: (pressed) => ({
    paddingVertical: windowHeight * 0.02,
    borderWidth: 2,
    backgroundColor: pressed ? "#0268b1" : null,
    borderColor: pressed ? "#0268b1" : "#0583d2",
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 10
  }),
  text_logout: (pressed) => ({
    fontSize: windowWidth * 0.05,
    color: pressed ? "white" : null,
    textAlign: "center",
    alignItems: "center",
  }),
  login: (pressed) => ({
    paddingVertical: windowHeight * 0.02,
    borderWidth: 2,
    backgroundColor: pressed ? "#0268b1" : null,
    borderColor: pressed ? "#0268b1" : "#0583d2",
    borderRadius: 10,
    marginBottom: 10
  }),
  text_login: (pressed) => ({
    fontSize: windowWidth * 0.05,
    color: pressed ? "white" : null,
    textAlign: "center",
    alignItems: "center",
  }),
  label: {
    color: "black",
    fontSize: windowWidth * 0.04,
    paddingVertical: 10
  },
  input: {
    borderWidth: 1,
    padding: 10,
  },
  btn_save: (pressed) => ({
    borderWidth: 2,
    borderColor: pressed ? "red" : null,
    borderRadius: 10,
  }),
  label_save: (pressed) => ({
    color: pressed ? "red" : null,
    padding: 10,
    fontSize: windowWidth * 0.05,
    textAlign: "center",
  }),
  image: {
    width: "100%",
    height: windowHeight * 0.27,
    borderRadius: 15,
  },
});

export default styles;
