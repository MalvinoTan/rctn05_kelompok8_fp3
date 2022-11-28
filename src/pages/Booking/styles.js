import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "../../utils";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth * 0.05,
    marginTop: windowHeight * 0.02,
  },
  label: {
    fontWeight: "bold",
    fontSize: windowWidth * 0.04,
    marginBottom: 8
  },
  wrapper_contact_info: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    paddingLeft: 10
  },
  input_contact: {
    padding: 10,
  },
  btn_checkout: (pressed) => ({
    borderColor: pressed ? "#0268b1" : "#0583d2",
    backgroundColor: pressed ? "#0268b1" : null,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  }),
  label_btn_checkout: (pressed) => ({
    color: pressed ? "white" : null,
    fontSize: windowWidth * 0.05,
    textAlign: "center"
  }),
  booking_detail_container: {
    display: "flex",
    flexDirection: "row"
  }
});

export default styles;
