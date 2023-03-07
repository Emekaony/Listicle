import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import AuthHeader from "../../../components/AuthHeader";
import CheckBox from "../../../components/CheckBox";
import Input from "../../../components/Input";
import { colors } from "../../../utils/colors";
import Button from "../../../components/Button";

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <AuthHeader title="Sign Up" />
        <Input label={"Name"} placeholder="Jodn Doe" />
        <Input label={"E-mail"} placeholder="example@gmail.com" />
        <Input isPassword={true} label={"Password"} placeholder="******" />

        <View style={styles.checkBoxContainer}>
          <CheckBox checked={checked} onCheck={setChecked} />
          <View style={{ flexDirection: "row", marginLeft: 13 }}>
            <Text style={[styles.agreeStyle]}>I agree with </Text>
            <Text style={[styles.agreeStyle, styles.agreeStyleBold]}>
              Terms{" "}
            </Text>
            <Text style={[styles.agreeStyle]}>& </Text>
            <Text style={[styles.agreeStyle, styles.agreeStyleBold]}>
              Privacy
            </Text>
          </View>
        </View>

        <Button style={styles.button} title="Sign Up" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  agreeStyle: {
    color: colors.blue,
  },
  agreeStyleBold: {
    fontWeight: "bold",
  },
  button: {
    marginVertical: 20,
  },
});

export default SignUp;
