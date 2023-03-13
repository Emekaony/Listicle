import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { colors } from "../utils/colors";

const Separator = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.textStyle}>{text}</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  textStyle: {
    color: colors.blue,
    fontWeight: "500",
    marginHorizontal: 10,
  },
});

export default React.memo(Separator);
