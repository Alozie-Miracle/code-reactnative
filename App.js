import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import MButtercupCart from "./Screens/MBttercupCart";

const App = () => {
  // Create a stack navigator for navigation within the app
  const Stack = createNativeStackNavigator();

  // Use state to control whether to hide the splash screen
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  // Load custom fonts using the expo-font library
  const [loaded] = useFonts({
    // Specify the fonts you want to load
    // Example: 'your-custom-font': require('./path-to-font.ttf'),
  });

  return (
    <>
      <NavigationContainer>
        {/* Conditionally render the splash screen */}
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* Create a screen with no header for your main content */}
            <Stack.Screen
              name="MButtercupCart"
              component={MButtercupCart}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
