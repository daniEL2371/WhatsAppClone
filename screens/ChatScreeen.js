import React from "react";
import { FlatList, Text } from "react-native";
import ChatListItem from "../components/ChatListItem";
import charRooms from "../data/charRooms";

const rooms = charRooms;
const ChatScreen = (props) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={rooms}
      renderItem={({ item }) => <ChatListItem chatRoom={item} ke />}
    />
  );
};

export default ChatScreen;
