import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  image: {
    backgroundColor: "gray",
    width: windowWidth,
    height: windowHeight * 0.35,
  },
  title: {
    width: "85%",
    fontWeight: "bold",
    fontSize: windowWidth * 0.05
  },
  subtitle: {
    fontSize: windowWidth * 0.045,
    textAlign: "center",
    marginBottom: 8,
    marginRight: 10,
    paddingTop: 8,
    fontWeight: "bold"
  },
  description: {
    textAlign: "center",
    fontSize: windowWidth * 0.035,
  },
  icon_star_wrapper: {
    flexDirection: "row",
  },
  icon_facility_wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text_price: {
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: windowWidth * 0.05
  },
  btn_wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  btn_booking: (pressed) => ({
    width: "50%",
    borderColor: pressed ? "#0268b1" : "#0583d2",
    backgroundColor: pressed ? "#0268b1" : null,
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text_booking: (pressed) => ({
    color: pressed ? "white" : null,
    fontSize: windowWidth * 0.05,
    textAlign: "center"
  }),
});

export default styles;
