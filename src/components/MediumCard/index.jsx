import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";

export default function MediumCard({ navigation, hotel }) {
  const handleNavigateToDetail = () => {
    return navigation.navigate("Detail", { hotel });
  };

  return (
    <Pressable onPress={handleNavigateToDetail}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri:
              `${hotel?.images.length ?
                hotel.images[0].url
                :
                "https://www.pngfind.com/pngs/m/94-940022_hotel-svg-png-icon-free-download-hotel-vector.png"}`
          }}
        />
        <View style={styles.card_body}>
          <Text style={styles.card_title} numberOfLines={2}>
            {hotel?.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
