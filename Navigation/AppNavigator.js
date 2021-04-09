import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../config/Colors";
import RootScreen from "../screens/RootScreen";
import { StyleSheet, View } from "react-native";
import {
  Octicons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import MainTabNavigator from "./MainTabNavigator";
import ChatRoomScreen from "../screens/ChatRoomScreen";

const Stack = createStackNavigator();
function AppNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.tintColor,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: Colors.white,
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainTabNavigator}
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
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerRight: () => (
            <View style={styles.ChatRoomHeaderRigth}>
              <MaterialIcons name="call" color={Colors.white} size={22} />
              <FontAwesome5 name="video" color={Colors.white} size={22} />
              <MaterialCommunityIcons
                color={Colors.white}
                name="dots-vertical"
                size={22}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  headerRight: {
    marginRight: 10,
    width: 100,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ChatRoomHeaderRigth: {
    marginRight: 10,
    width: 110,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AppNavigator;
