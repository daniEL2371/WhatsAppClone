import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
const ChatRoomScreen = (props) => {
  const route = useRoute();
  console.log(route.params.id);
  return (
    <View>
      <Text>Chat room</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default ChatRoomScreen;
