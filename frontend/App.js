import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";

import Splash from "./src/screens/auth/Splash/Splash";
import SignUp from "./src/screens/auth/SignUp/SignUp";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Splash /> */}
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
