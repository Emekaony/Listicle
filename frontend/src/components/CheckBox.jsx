import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

import { colors } from "../utils/colors";

const CheckBox = ({ checked, onCheck }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onCheck((prev) => !prev)}
      style={styles.container}
    >
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require("../assets/checked.png")}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 4,
    width: 22,
    height: 22,
  },
  innerContainer: {
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  checkIcon: {
    width: 12,
    height: 9,
  },
});

export default React.memo(CheckBox);
