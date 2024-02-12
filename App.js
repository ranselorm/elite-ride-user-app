// import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/splashScreen";
import Onboarding from "./screens/onboarding";
import CustomHeader from "./shared/customHeader";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Get Started"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Onboarding}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader
                title="Register"
                onBackPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: "#FEFEFA",
    marginHorizontal: 10,
    // backgroundColor: "red",
  },
});

// <SafeAreaView style={styles.safeArea}></SafeAreaView>;
