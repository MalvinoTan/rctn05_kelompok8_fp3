import { useDispatch } from "react-redux";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { addToHistory } from "../../redux/userSlice";
import { windowWidth } from "../../utils";
import Layout from "../../components/Layout";
import Gap from "../../components/Gap";
import styles from "./styles";

export default function Booking({ route }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { hotel } = route.params;

  const handleBooking = () => {
    dispatch(
      addToHistory(hotel)
    );
    return navigation.navigate("History");
  };

  return (
    <Layout>
      <Text style={styles.label}>Contact Infomation</Text>
      <View style={styles.wrapper_contact_info}>
        <FontAwesome5
          name="user-alt"
          size={windowWidth * 0.05}
        />
        <TextInput
          style={styles.input_contact}
          placeholder="John Bayu"
        />
      </View>
      <View style={styles.wrapper_contact_info}>
        <FontAwesome5
          name="envelope"
          size={windowWidth * 0.05}
        />
        <TextInput
          style={styles.input_contact}
          keyboardType="email-address"
          placeholder="example@mail.com"
        />
      </View>
      <View style={styles.wrapper_contact_info}>
        <FontAwesome5
          name="phone"
          size={windowWidth * 0.05}
        />
        <TextInput
          style={styles.input_contact}
          keyboardType="numeric"
          placeholder="082140120417"
        />
      </View>
      <Gap height={20} />
      <Text style={styles.label}>Booking Infomation</Text>
      <View style={styles.booking_detail_container}>
        <FontAwesome5
          name="money-bill"
          size={windowWidth * 0.05}
        />
        <Gap width={10} />
        <Text>
          {
            hotel?.roomTypes.length > 0 ?
              hotel?.roomTypes[0].rates.length > 0 ?
                `Price : ${hotel?.roomTypes[0].rates[0].retailRate.total.amount} ${hotel?.roomTypes[0].rates[0].retailRate.total.currency.code}`
                :
                "No Price"
              :
              "No Price"
          }
        </Text>
      </View>
      <Gap height={10} />
      <View style={styles.booking_detail_container}>
        <FontAwesome5
          name="check"
          size={windowWidth * 0.05}
        />
        <Gap width={15} />
        <Text>
          {
            hotel?.roomTypes.length > 0 ?
              hotel?.roomTypes[0].rates.length > 0 ?
                `Check In : ${hotel?.roomTypes[0].rates[0].start} ~ Check Out : ${hotel?.roomTypes[0].rates[0].end}`
                :
                "No Room"
              :
              "No Room"
          }
        </Text>
      </View>
      <Gap height={20} />
      <Pressable
        style={({ pressed }) => styles.btn_checkout(pressed)}
        onPress={handleBooking}
      >
        {
          ({ pressed }) => (
            <Text style={styles.label_btn_checkout(pressed)}>Checkout</Text>
          )
        }
      </Pressable>
    </Layout>
  );
}
