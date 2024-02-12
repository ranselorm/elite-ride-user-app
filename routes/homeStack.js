import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/splashScreen";
import onboarding from "../screens/onboarding";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={SplashScreen} />
      <Stack.Screen name="Details" component={onboarding} />
    </Stack.Navigator>
  );
}

export default HomeStack;
