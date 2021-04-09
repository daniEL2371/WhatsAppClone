import React from "react";
import { FlatList, Text, View } from "react-native";
import ChatListItem from "../components/ChatListItem";
import ContactListItem from "../components/ContactListItem";
import NewMessageButton from "../components/NewMessageButton";
import charRooms from "../data/charRooms";
import Users from "../data/Users";

const users = Users;
const ContactsScreen = (props) => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
      />
    </View>
  );
};

export default ContactsScreen;
