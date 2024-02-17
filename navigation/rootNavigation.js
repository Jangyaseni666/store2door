import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BusinessReg from "../screens/BusinessReg";
import HomeScreen from "../screens/HomeScreen";
import Business from "../screens/Business";
import ProductReg from "../screens/ProductReg";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BusinessReg"
          component={BusinessReg}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Business"
          component={Business}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductReg"
          component={ProductReg}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
