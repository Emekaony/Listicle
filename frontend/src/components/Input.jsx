import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

import { colors } from "../utils/colors";

const Input = ({ label, placeholder, isPassword }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleEyePress = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholder={placeholder}
          style={styles.input}
        />
        {isPassword ? (
          <Pressable onPress={handleEyePress}>
            <Image
              style={styles.eye}
              source={
                isPasswordVisible
                  ? require("../assets/eye.png")
                  : require("../assets/eye_closed.png")
              }
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    color: colors.blue,
    fontSize: 14,
    fontWeight: "500",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
  },
  eye: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
  },
});

export default React.memo(Input);
