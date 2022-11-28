import { Text, View, Pressable, TextInput, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUserIsLoggedIn } from "../../redux/userSlice";
import {
  setUserProfileFullname,
  setUserProfileEmail,
  setUserProfileAddress,
} from "../../redux/userSlice";
import AboutSection from "../../components/AboutSection";
import Layout from "../../components/Layout";
import Gap from "../../components/Gap";
import malvino from "../../../assets/img/malvino.jpeg";
import taofik from "../../../assets/img/taofik.jpg";
import styles from "./styles";

export default function Profile({ navigation }) {

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.userData);
  const getUserProfileFromState = useSelector((state) => state.user.userData.userProfile);

  const handleRedirectToLoginPage = () => {
    return navigation.navigate("Login");
  };

  const handleLogout = () => {
    dispatch(setUserIsLoggedIn(false));
    return navigation.navigate("Splash");
  };

  return (
    <ScrollView>
      <Layout>
        <AboutSection
          img={malvino}
          name="Malvino Austin Tanura"
          id="RCTN-KS05-006"
          done={
            [
              "Pengembangan aplikasi mobile",
              "Build APK",
            ]
          }
        />
        <AboutSection
          img={taofik}
          name="Taofik Arianto"
          id="RCTN-KS05-025"
          done={
            [
              "Pembuatan desain figma",
              "Pembuatan panduan dan cara penggunaan aplikasi",
            ]
          }
        />
        {
          userData.loggedIn ?
            <>
              <Text style={styles.card_title}>My Account</Text>
              <View>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Your fullname"
                  onChangeText={(text) => dispatch(setUserProfileFullname(text))}
                  value={getUserProfileFromState.fullname}
                />

                <Gap height={10} />
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="example@gmail.com"
                  onChangeText={(text) => dispatch(setUserProfileEmail(text))}
                  value={getUserProfileFromState.email}
                />

                <Gap height={10} />
                <Text style={styles.label}>Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Your Address"
                  onChangeText={(text) => dispatch(setUserProfileAddress(text))}
                  value={getUserProfileFromState.address}
                />
              </View>

              <Pressable
                style={({ pressed }) => styles.logout(pressed)}
                onPress={handleLogout}
              >
                {({ pressed }) => (
                  <Text style={styles.text_logout(pressed)}>Logout</Text>
                )}
              </Pressable>
            </>
            :
            <Pressable
              style={({ pressed }) => styles.login(pressed)}
              onPress={handleRedirectToLoginPage}
            >
              {({ pressed }) => (
                <Text style={styles.text_login(pressed)}>Login</Text>
              )}
            </Pressable>
        }
      </Layout>
    </ScrollView>
  );
}
