import { StyleSheet, Text, View } from "react-native";

import { useAuth } from "../context/auth";

export default function Index() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text onPress={handleSignOut}>Sign Out</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
