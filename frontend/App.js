import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import * as Application from "expo-application";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

import SignUp from "./src/screens/auth/SignUp/SignUp";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  console.log(Application.applicationId);
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: `648755594890-qnbde5lc4d6cd23e7bpb54f48hsgf7jq.apps.googleusercontent.com`,
    expoClientId: Application.applicationId,
    scopes: ["email", "password"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // Add error handling here
      console.log("There was an error");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <SignUp
        googleOnPress={() => {
          promptAsync();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
