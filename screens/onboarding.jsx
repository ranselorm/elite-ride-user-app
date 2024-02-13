import { useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Onboarding = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(true);
  const [selectedID, setSelectedID] = useState();

  console.log(toggleCheckBox);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.content}>
          <Text style={styles.text}>Firstname</Text>
          <TextInput style={styles.input} multiline />
          <Text style={styles.text}>Lastname</Text>
          <TextInput style={styles.input} multiline />
          <Text style={styles.text}>Password</Text>
          <View style={styles.password}>
            <TextInput style={styles.passwordInput} multiline />
            <Text>Show</Text>
          </View>
          <Text style={styles.text}>Email</Text>
          <TextInput style={styles.input} multiline />
          <Text style={styles.text}>Phone Number</Text>
          <TextInput style={styles.input} multiline keyboardType="numeric" />
          <View style={styles.checkbox}>
            <Pressable onPress={() => setToggleCheckBox(!toggleCheckBox)}>
              <Text style={styles.text}>I'm pressable!</Text>
            </Pressable>
            <Text style={styles.text}>Non Ghanaian?</Text>
          </View>
          {toggleCheckBox && (
            <View>
              <Text style={styles.text}>GPS Address</Text>
              <TextInput multiline style={styles.input} />
            </View>
          )}

          <Text style={styles.text}>ID Type:</Text>
          <Picker
            selectedValue={selectedID}
            onValueChange={(itemValue) => setSelectedID(itemValue)}
            style={styles.picker}
          >
            <Picker.Item
              label="Ghana Card"
              value="Ghana Card"
              style={styles.text}
            />
            <Picker.Item
              label="Driver's License"
              value="Driver's License"
              style={styles.text}
            />
          </Picker>
          <Text style={styles.text}>ID Number</Text>
          <TextInput style={styles.input} multiline />
          <Text style={styles.text}>Upload ID</Text>
          <TextInput style={styles.input} multiline />
          <Pressable
            style={styles.button}
            onPress={() => alert("Form button clicked")}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingBottom: 10,
    width: "100%",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "space-between",
    gap: 20,
  },
  password: {
    flexDirection: "row",
    gap: 20,
  },

  text: {
    fontSize: 18,
  },
  input: {
    height: 20,
    fontSize: 18,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingBottom: 2,
    width: "100%",
  },
  passwordInput: {
    height: 20,
    fontSize: 18,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingBottom: 2,
    width: "85%",
  },

  checkbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },

  picker: {
    height: 50,
    width: "100%",
    backgroundColor: "#FEFEFA",
    color: "black",
    marginVertical: 10,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    width: "100%",
    backgroundColor: "#007FFF",
  },
  buttonText: {
    // fontSize: 18,
    fontSize: RFValue(16),
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Onboarding;
