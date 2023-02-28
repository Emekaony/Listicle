import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import Button from "../../../components/Button";
import { colors } from "../../../utils/colors";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        resizeMode="contain"
        source={require("../../../assets/splash_image.png")}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <Button title={"Sign Up"} />
      <Pressable>
        <Text style={styles.signIn}>Sign In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    height: "100%",
  },
  titleContainer: {
    marginVertical: 54,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  innerTitle: {
    fontSize: 40,
    color: colors.orange,
    textDecorationLine: "underline",
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
  signIn: {
    color: colors.blue,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginTop: 30,
  },
});

export default Splash;
