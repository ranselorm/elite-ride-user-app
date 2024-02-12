import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SplashScreen from "./screens/splashScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SplashScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: "#FEFEFA",
  },
});
