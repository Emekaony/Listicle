import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { colors } from "../utils/colors";

const Button = ({ title, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressedStyle,
      ]}
      onPress={onPress}
    >
      <Text style={styles.innderTextStyle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    padding: 8,
    height: 60,
    width: "100%",
    borderRadius: 8,
    justifyContent: "center",
  },
  pressedStyle: {
    opacity: 0.7,
  },
  innderTextStyle: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Button;
