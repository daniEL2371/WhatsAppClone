import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ImageBackground,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Chats from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
import BG from "../assets/BG.png";
import InputBox from "../components/InputBox";

const chats = Chats.messages;
const ChatRoomScreen = (props) => {
  const route = useRoute();
  console.log(route.params.id);
  return (
    <ImageBackground source={BG} style={styles.bg}>
      <FlatList
        inverted
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatMessage message={item} />}
      />
      <InputBox />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  bg: { width: "100%", height: "100%" },
});

export default ChatRoomScreen;
