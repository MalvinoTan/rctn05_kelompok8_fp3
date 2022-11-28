import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "../../utils";

const styles = StyleSheet.create({
    about_container: {
        display: "flex",
        alignItems: "center",
        marginBottom: 20,
        borderBottomColor: "gray",
        borderBottomWidth: 1
    },
    about_title: {
        fontSize: windowWidth * 0.055,
        marginTop: 10,
        fontWeight: "bold"
    },
    about_subtitle: {
        fontSize: windowWidth * 0.045,
        marginTop: 10,
    },
    about_done: {
        margin: 5,
        textAlign: "center"
    },
    image: {
        width: "100%",
        height: windowHeight * 0.27,
        borderRadius: 15,
    },
});

export default styles;