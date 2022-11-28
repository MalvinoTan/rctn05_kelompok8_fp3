import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  btn_search: (pressed) => ({
    backgroundColor: pressed ? "#0268b1" : null,
    borderColor: pressed ? "#0268b1" : "#0583d2",
    borderRadius: 50,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }),
  input: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingLeft: 20,
    borderRadius: 50,
  },
  date_container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 10
  },
  wrapper_input_date: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingLeft: 20,
    borderRadius: 50,
    flex: 1
  }
});

export default styles;
