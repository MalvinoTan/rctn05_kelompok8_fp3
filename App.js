import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import Router from "./src/router";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#e8f4fc",
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Router />
        <StatusBar style="dark" />
      </NavigationContainer>
    </Provider>
  );
}
