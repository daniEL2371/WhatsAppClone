import React from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";
import Colors from "../config/Colors";
function ChatMessage({ message }) {
  const isMyMessage = (id) => {
    if (message) return message.user.id === "u1";
  };
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isMyMessage(message.id)
          ? "#DCF8C5"
          : styles.container.backgroundColor,
        marginRight: isMyMessage(message.id)
          ? styles.container.margin
          : styles.container.marginRight,
        marginLeft: isMyMessage(message.id) ? 50 : styles.container.margin,
      }}
    >
      {!isMyMessage(message.id) && (
        <Text style={styles.name}>{message && message.user.name}</Text>
      )}
      <Text>{message && message.content}</Text>
      <Text style={styles.time}>
        {message && moment(message.createdAt).fromNow()}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { width: "100%", height: "100%" },
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    margin: 10,
    marginRight: 50,
    borderRadius: 5,
    padding: 10,
  },
  name: {
    color: Colors.tintColor,
    fontWeight: "bold",
    marginBottom: 5,
  },
  message: {},
  time: {
    alignSelf: "flex-end",
    color: Colors.mediun,
    fontSize: 13,
  },
});
export default ChatMessage;
