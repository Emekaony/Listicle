import React from "react";
import { View, StyleSheet } from "react-native";

const Dummy = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(Dummy);
