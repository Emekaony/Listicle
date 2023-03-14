import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { colors } from "../utils/colors";

const GoogleLogin = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require("../assets/google.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    borderRadius: 14,
    width: "45%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
});

export default React.memo(GoogleLogin);
