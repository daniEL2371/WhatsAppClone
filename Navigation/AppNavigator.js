import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../config/Colors";
import RootScreen from "../screens/RootScreen";
import { StyleSheet, View } from "react-native";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
function AppNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.tintColor,
        },
        headerTintColor: Colors.white,
      }}
    >
      <Stack.Screen
        name="Root"
        component={RootScreen}
        options={{
          title: "WhatsApp",
          headerRight: () => (
            <View style={styles.headerRight}>
              <Octicons name="search" size={22} color={Colors.white} />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color={Colors.white}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  headerRight: {
    marginRight: 10,
    width: 70,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default AppNavigator;
