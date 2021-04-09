import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RootScreen from "../screens/RootScreen";
import Colors from "../config/Colors";
import { Fontisto } from "@expo/vector-icons";
const Tabs = createMaterialTopTabNavigator();
const MainTabNavigator = (props) => {
  return (
    <Tabs.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        activeTintColor: Colors.white,
        style: { backgroundColor: Colors.tintColor },
        indicatorStyle: { backgroundColor: Colors.white, height: 4 },
        labelStyle: {
          fontWeight: "bold",
        },
        showIcon: true,
      }}
    >
      <Tabs.Screen
        name="Camera"
        component={RootScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" size={20} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      ></Tabs.Screen>
      <Tabs.Screen name="Chats" component={RootScreen}></Tabs.Screen>
      <Tabs.Screen name="Status" component={RootScreen}></Tabs.Screen>
      <Tabs.Screen name="Calls" component={RootScreen}></Tabs.Screen>
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainTabNavigator;
