import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  Fontisto,
} from "@expo/vector-icons";
import Colors from "../config/Colors";
import { useState } from "react/cjs/react.development";

const InputBox = () => {
  const [message, setMessage] = useState("");

  const onType = (message) => {
    setMessage(message);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="laugh-beam" size={24} color={Colors.mediun} />
        </View>
        <TextInput
          onChangeText={onType}
          placeholder={"Type a message"}
          multiline
          style={styles.textInput}
        />
        <View style={styles.iconContainer}>
          <Entypo name="attachment" size={24} color={Colors.mediun} />
        </View>
        <View style={styles.iconContainer}>
          {!message && (
            <Fontisto name="camera" size={24} color={Colors.mediun} />
          )}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {!message ? (
          <MaterialCommunityIcons
            size={28}
            name="microphone"
            color={Colors.white}
          />
        ) : (
          <MaterialCommunityIcons size={28} name="send" color={Colors.white} />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    flex: 1,
    borderRadius: 25,
    margin: 10,
    padding: 10,
    alignItems: "flex-end",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.tintColor,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textInput: {
    flex: 1,
  },
  iconContainer: {
    marginHorizontal: 5,
  },
});

export default InputBox;
