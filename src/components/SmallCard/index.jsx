import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { windowWidth } from "../../utils";
import Gap from "../Gap";
import styles from "./styles";

export default function SmallCard({ hotel }) {
  const rating = () => {
    if (hotel?.starRating === 1) return [1];
    if (hotel?.starRating === 2) return [1, 2];
    if (hotel?.starRating === 3) return [1, 2, 3];
    if (hotel?.starRating === 4) return [1, 2, 3, 4];
    if (hotel?.starRating === 5) return [1, 2, 3, 4, 5];
  };

  return (
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
        <Text style={styles.text_name}>
          {hotel.name}
        </Text>
        <Text>
          {
            hotel?.roomTypes ?
              hotel?.roomTypes[0].rates.length > 0 ?
                `Check In : ${hotel?.roomTypes[0].rates[0].start} ~ Check Out : ${hotel?.roomTypes[0].rates[0].end}`
                :
                "No Room"
              :
              "No Room"
          }
        </Text>
        <Gap height={5} />
        <Text>
          {
            hotel?.roomTypes ?
              hotel?.roomTypes[0].rates.length > 0 ?
                `Price : ${hotel?.roomTypes[0].rates[0].retailRate.total.amount} ${hotel?.roomTypes[0].rates[0].retailRate.total.currency.code}`
                :
                "-"
              :
              "-"
          }
        </Text>
        <View style={styles.star_icons}>
          {
            rating().map((index) => (
              <AntDesign
                key={index}
                name="star"
                size={windowWidth * 0.04}
                color="orange"
              />
            ))
          }
        </View>
      </View>
    </View>
  );
}
