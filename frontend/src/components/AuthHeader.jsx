import React from "react";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";

import { colors } from "../utils/colors";

const AuthHeader = ({ onBackPress, title }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress} hitSlop={20}>
        <Image
          source={require("../assets/auth_back.png")}
          style={styles.imageStyle}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 54,
  },
  imageStyle: {
    width: 18,
    height: 18,
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: "500",
    marginLeft: 16,
  },
});

export default React.memo(AuthHeader);
