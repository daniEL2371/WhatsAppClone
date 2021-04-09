import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../config/Colors";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const ChatListItem = ({ chatRoom }) => {
  if (!chatRoom) return null;

  const lastMessage = !chatRoom.lastMessage ? "" : chatRoom.lastMessage;
  const user = chatRoom.users ? chatRoom.users[1] : null;

  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate("ChatRoom", {
      id: chatRoom.id,
      name: user.name,
    });
  };
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          {user && (
            <Image
              source={require("../assets/mosh.jpg")}
              style={styles.avatar}
            />
          )}
        </View>
        <View style={styles.leftContianer}>
          <View style={styles.nameAndDateContiner}>
            <View>
              <Text style={styles.username}>{user && user.name}</Text>
            </View>
            <View>
              <Text style={styles.date}>
                {lastMessage && moment(lastMessage.createdAt).fromNow()}
              </Text>
            </View>
          </View>
          <View>
            <Text numberOfLines={1} style={styles.lastMessage}>
              {lastMessage && lastMessage.content}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  leftContianer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-around",
  },
  nameAndDateContiner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    color: Colors.mediun,
    fontSize: 14,
  },
  lastMessage: {
    color: Colors.mediun,
  },
});

export default ChatListItem;
