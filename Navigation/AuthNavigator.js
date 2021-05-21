import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../config/Colors";
import Login from "../screens/Login";
import PhoneVerification from "../screens/PhoneVerification";

const Stack = createStackNavigator();

function AuthNavigator(props) {
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
      <Stack.Screen options={{ title: false }} name="Login" component={Login} />

      <Stack.Screen
        name="Verify"
        options={{ title: false }}
        component={PhoneVerification}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
