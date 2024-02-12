import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const CustomHeader = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.button}>
        <Text style={styles.cancel}>Cancel</Text>
      </TouchableOpacity>
      <Text style={styles.title}>ELITE RIDE</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    paddingHorizontal: 16,
    marginTop: 45,
  },
  cancel: {
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    flex: 1,
    textAlign: "center",
  },
  button: {
    paddingHorizontal: 10,
  },
  placeholder: {
    width: 24,
  },
});

export default CustomHeader;
