import { View, StyleSheet, Text, Pressable } from "react-native";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>onboarding screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
  },
});

export default Onboarding;
