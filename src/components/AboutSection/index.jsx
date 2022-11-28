import { View, Image, Text } from "react-native";
import styles from "./styles.js";

export default function AboutSection({ img, name, id, done }) {
  return (
    <View style={styles.about_container}>
      <Image
        style={styles.image}
        source={img}
      />
      <Text style={styles.about_title}>{name}</Text>
      <Text style={styles.about_subtitle}>{id}</Text>
      {
        done?.map((item, itemIdx) => <Text style={styles.about_done} key={itemIdx}>{item}</Text>)
      }
    </View>
  )
}
