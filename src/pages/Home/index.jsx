import { Fragment } from "react";
import { Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar";
import MediumCard from "../../components/MediumCard";
import Layout from "../../components/Layout";
import Gap from "../../components/Gap";
import styles from "./styles";

export default function Home({ navigation }) {

  const getDataHotel = useSelector((state) => state.hotel?.data);

  return (
    <Layout flex={1}>
      <Gap height={10} />
      <SearchBar navigation={navigation} />
      <Gap height={20} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.subheading}>Top Destinations</Text>
        <ScrollView horizontal={true}>
          {
            getDataHotel?.slice(1, 10).map((hotel) => (
              <Fragment key={hotel.hotelId}>
                <MediumCard navigation={navigation} hotel={hotel} />
                <Gap width={10} />
              </Fragment>
            ))
          }
        </ScrollView>

        <Text style={styles.subheading}>Popular Destinations</Text>
        <ScrollView horizontal={true}>
          {
            getDataHotel?.slice(10, 20).map((hotel) => (
              <Fragment key={hotel.hotelId}>
                <MediumCard navigation={navigation} hotel={hotel} />
                <Gap width={10} />
              </Fragment>
            ))
          }
        </ScrollView>
      </ScrollView>
    </Layout>
  );
}
