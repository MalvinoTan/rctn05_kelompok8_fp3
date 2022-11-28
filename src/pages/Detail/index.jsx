import { Fragment } from "react";
import { Text, View, Image, Pressable, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { saveToFavourite } from "../../redux/userSlice";
import { AntDesign } from "@expo/vector-icons";
import { windowWidth } from "../../utils";
import Layout from "../../components/Layout";
import Gap from "../../components/Gap";
import styles from "./styles";

export default function Detail({ route, navigation }) {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.userData);

  const { hotel } = route.params;

  const rating = () => {
    if (hotel?.starRating === 1) return [1];
    if (hotel?.starRating === 2) return [1, 2];
    if (hotel?.starRating === 3) return [1, 2, 3];
    if (hotel?.starRating === 4) return [1, 2, 3, 4];
    if (hotel?.starRating === 5) return [1, 2, 3, 4, 5];
  };

  const ShowIconFavouriteOrUnFavourite = () => {
    const result = userData.favourite.some(
      (item) => item.hotel.hotelId === hotel.hotelId
    );
    if (result)
      return (
        <AntDesign name="heart" size={windowWidth * 0.1} color="red" />
      );
    if (!result)
      return (
        <AntDesign name="hearto" size={windowWidth * 0.1} color="red" />
      );
  };

  const handleRedirectToBookingPage = () => {
    if (userData.loggedIn) {
      return navigation.navigate("Booking", { hotel });
    } else {
      return navigation.navigate("Login");
    }
  };

  function handleAddFavourite() {
    return dispatch(saveToFavourite({ hotel }));
  }

  return (
    <Fragment>
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
      <ScrollView>
        <Layout>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>{hotel?.name}</Text>
              {
                userData.loggedIn && (
                  <Pressable onPress={handleAddFavourite}>
                    <ShowIconFavouriteOrUnFavourite />
                  </Pressable>
                )
              }
            </View>
            <Gap height={10} />
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
            <Gap height={10} />
            <Text>
              {
                hotel?.roomTypes.length > 0 ?
                  hotel?.roomTypes[0].rates.length > 0 ?
                    `Price : ${hotel?.roomTypes[0].rates[0].retailRate.total.amount} ${hotel?.roomTypes[0].rates[0].retailRate.total.currency.code}`
                    :
                    "-"
                  :
                  "-"
              }
            </Text>
            <Gap height={13} />
            <View style={styles.icon_star_wrapper}>
              {
                rating().map((index) => (
                  <AntDesign
                    key={index}
                    name="star"
                    size={windowWidth * 0.05}
                    color="orange"
                  />
                ))
              }
            </View>
            <Gap height={9} />
          </View>

          <Gap height={10} />

          <View>
            <Text style={styles.subtitle}>About Place</Text>
            <Text style={styles.description}>{hotel?.description.short}</Text>
          </View>

          <Gap height={25} />

          <View>
            <Text style={styles.subtitle}>Facilities</Text>
            <ScrollView>
              {
                hotel?.amenities.map((item, index) => (
                  <View style={styles.icon_facility_wrapper} key={index}>
                    <Text style={styles.text_facility}>{item.formatted}</Text>
                    <Gap width={15} />
                  </View>
                ))
              }
            </ScrollView>
          </View>
          <Gap height={10} />
        </Layout>
      </ScrollView>

      <View style={styles.btn_wrapper}>
        <Pressable
          style={({ pressed }) => styles.btn_booking(pressed)}
          onPress={handleRedirectToBookingPage}
        >
          {
            ({ pressed }) => (
              <Text style={styles.text_booking(pressed)}>Book Now</Text>
            )
          }
        </Pressable>
      </View>
    </Fragment>
  );
}
