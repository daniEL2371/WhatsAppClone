import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import Colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTextInput from "../components/AppTextInput";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";

import { firebaseConfig } from "../config/firebase";
import sendVerification from "../config/sendVerification";

const PhoneVerification = (props) => {
  const recaptchaVerifier = React.useRef(null);

  const onVerify = async () => {
    await sendVerification(recaptchaVerifier);
  };
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <MaterialCommunityIcons
          size={80}
          name="whatsapp"
          color={Colors.white}
        />
        <Text style={styles.text}> WhatsApp</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Verify your phone</Text>
        </View>
        <AppTextInput
          labelColor={Colors.tintColor}
          keyboardType="numeric"
          label={"Code"}
        />
        <Button onPress={onVerify} color={Colors.tintColor} title="Verify" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    flex: 0.25,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.white,
    fontSize: 15,
  },
  inputContainer: {
    justifyContent: "space-around",
    flex: 0.4,
    padding: 30,
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    color: Colors.tintColor,
  },
});

export default PhoneVerification;
