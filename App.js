import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import MButtercupCart from "./Screens/MButtercupCart";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const Stack = createNativeStackNavigator();
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  // const [fontsLoaded, error] = useFonts({
  //   "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  //   "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  //   "Anton-Regular": require("./assets/fonts/Anton-Regular.ttf"),
  // });

  // if (!fontsLoaded && !error) {
  //   return null;
  // }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
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
