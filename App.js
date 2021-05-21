import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
} from "react-native";
import AppNavigator from "./Navigation/AppNavigator";
import AuthNavigator from "./Navigation/AuthNavigator";
import Login from "./screens/Login";

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <NavigationContainer>
          {/* <AppNavigator /> */}
          <AuthNavigator />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default App;
