import { ScrollView, Text } from "react-native";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import SmallCard from "../../components/SmallCard";
import styles from "./styles";

export default function History({ navigation }) {
  const userData = useSelector((state) => state.user.userData);
  const userDataHistory = useSelector((state) => state.user.userData.history);

  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          userData.loggedIn ?
            userDataHistory.length > 0 ?
              userDataHistory.map((hotel, index) => (
                <SmallCard key={index} navigation={navigation} hotel={hotel} />
              ))
              :
              <Text style={styles.no_data}>History Booking Empty!</Text>
            :
            <Text style={styles.text_not_login}>You must login first!</Text>
        }
      </ScrollView>
    </Layout>
  );
}
