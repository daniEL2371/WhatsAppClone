import React from "react";
import { FlatList, Text, View } from "react-native";
import ChatListItem from "../components/ChatListItem";
import NewMessageButton from "../components/NewMessageButton";
import charRooms from "../data/charRooms";

const rooms = charRooms;
const ChatScreen = (props) => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={rooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} ke />}
      />
      <NewMessageButton />
    </View>
  );
};

export default ChatScreen;
