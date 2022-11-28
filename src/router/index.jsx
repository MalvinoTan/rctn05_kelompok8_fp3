import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "../pages/Splash";
import HomeScreen from "../pages/Home";
import DetailScreen from "../pages/Detail";
import SearchScreen from "../pages/Search";
import LoginScreen from "../pages/Login";
import BookingScreen from "../pages/Booking";
import FavouriteScreen from "../pages/Favourite";
import HistoryScreen from "../pages/History";
import ProfileScreen from "../pages/Profile";
import BottomNav from "../components/BottomNav";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNav {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Hotel - Kelompok 8",
          headerStyle: {
            backgroundColor: "#0583d2",
          },
          headerTintColor: "white",
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          title: "My Favourite",
          headerStyle: {
            backgroundColor: "#0583d2",
          },
          headerTintColor: "white",
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: "History Booking",
          headerStyle: {
            backgroundColor: "#0583d2",
          },
          headerTintColor: "white",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: "#0583d2",
          },
          headerTintColor: "white",
        }}
      />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Search",
          headerStyle: {
            backgroundColor: "#0583d2",
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "Detail Hotel",
          headerStyle: {
            backgroundColor: "#0583d2",
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          title: "Booking Now",
          headerStyle: {
            backgroundColor: "#0583d2",
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Router;