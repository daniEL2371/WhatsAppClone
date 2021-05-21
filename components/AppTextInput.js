import React from "react";
import { View, Text, FlatList, StyleSheet, TextInput } from "react-native";
import Colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ label, labelColor, labelIcon = null, ...props }) {
  console.log({ ...props });
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={{ ...styles.label, color: labelColor }}>{label}</Text>
        {labelIcon && (
          <MaterialCommunityIcons
            color={labelColor}
            size={14}
            name={labelIcon}
            style={{ marginHorizontal: 10 }}
          />
        )}
      </View>
      <TextInput caretHidden style={styles.input} {...props} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  label: {},
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 1,
    padding: 5,
    color: Colors.primary,
  },
});

export default AppTextInput;
