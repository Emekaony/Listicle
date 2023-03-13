import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import * as Application from "expo-application";

import SignUp from "./src/screens/auth/SignUp/SignUp";

export default function App() {
  // tyring to get the app bundle ID
  //Application.applicationId = "com.shadon.listicle";
  console.log("The application ID is: ", Application.applicationId);
  console.log(Application.applicationName);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <SignUp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
