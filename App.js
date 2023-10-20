import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MButtercupCart from "./Screens/MBttercupCart";
import LaunchScreen1 from "./Screens/SecondScreeen";
import ThirdScreen from "./Screens/ThirdScreen";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="ThirdScreen"
            component={ThirdScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
