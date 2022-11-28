import { useSelector } from "react-redux";
import { ActivityIndicator, View, ScrollView, Text } from "react-native";
import SearchBar from "../../components/SearchBar";
import BigCard from "../../components/BigCard";
import Gap from "../../components/Gap";
import styles from "./styles";

export default function Search({ navigation }) {
  const searchResult = useSelector((state) => state.hotel.searchResult);
  const isFetchLoading = useSelector((state) => state.hotel.loading);

  return (
    <View style={styles.container}>
      <Gap height={10} />
      <SearchBar />
      <Gap height={10} />
      {
        isFetchLoading ?
          <ActivityIndicator size="large" color="red" />
          :
          searchResult.length > 0 ?
            <ScrollView showsVerticalScrollIndicator={false}>
              {searchResult?.map((searchResult, index) => (
                <BigCard key={index} navigation={navigation} hotel={searchResult} />
              ))}
            </ScrollView>
            :
            <Text style={styles.text_notfound}>
              Hotel is not found!
            </Text>
      }
    </View>
  );
}
