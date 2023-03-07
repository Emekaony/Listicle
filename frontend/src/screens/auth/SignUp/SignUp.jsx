import React from "react";
import { View, StyleSheet } from "react-native";

import AuthHeader from "../../../components/AuthHeader";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default SignUp;
