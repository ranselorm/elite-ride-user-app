import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Ionicons } from "@expo/vector-icons"; // For password visibility toggle icon

const OnboardingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [gpsAddressVisible, setGpsAddressVisible] = useState(true);
  const [selectedIdCard, setSelectedIdCard] = useState("");
  const [idCardNumber, setIdCardNumber] = useState("");
  const [idCardImage, setIdCardImage] = useState(null); // Assuming you're using a file picker for image upload

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordStrength = () => {
    // Add logic to calculate password strength
    // This is just a placeholder
    return "Strong"; // Example strength
  };

  return (
    <View style={styles.container}>
      <View styles={styles.main}>
        <View>
          <Text>Firstname</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text>Lastname</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  input: {
    borderBottomWidth: 1,
    width: "100%",
  },
});

export default OnboardingForm;
