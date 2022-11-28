import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { fetchAllHotelData } from "../../api";
import { windowWidth } from "../../utils";
import Gap from "../../components/Gap";

export default function Splash({ navigation }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllHotelData());
    setTimeout(() => {
      navigation.replace("MainApp");
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FontAwesome5 name="home" size={windowWidth * 0.2} />
      <Gap height={10} />
      <Text style={styles.text}>Hotel App - Kelompok 8</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: windowWidth * 0.05,
  },
});
