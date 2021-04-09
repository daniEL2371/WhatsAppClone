import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../config/Colors";
import { useNavigation } from "@react-navigation/native";
const NewMessageButton = (props) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Contacts");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          size={25}
          color={Colors.white}
          name="message-reply-text"
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.tintColor,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

export default NewMessageButton;
