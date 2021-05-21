import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/core";
import NavigationPath from "../config/NavigationPath";

const Login = (props) => {
  const recaptchaVerifier = React.useRef(null);
  const [input, setInput] = useState("");
  const navigation = useNavigation();

  const onLogin = async () => {
    const phoneNumber = input;
    const res = await sendVerification(phoneNumber, recaptchaVerifier);
    if (res) {
      navigation.navigate(NavigationPath.PHONE_VERIFY);
    }
  };
  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={false}
      />
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
          <Text style={styles.title}>Login to you account</Text>
        </View>
        <AppTextInput
          onChangeText={(v) => setInput(v)}
          labelColor={Colors.tintColor}
          keyboardType="phone-pad"
          labelIcon="phone"
          label={"Phone"}
        />
        <Button onPress={onLogin} color={Colors.tintColor} title="Login" />
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

export default Login;
