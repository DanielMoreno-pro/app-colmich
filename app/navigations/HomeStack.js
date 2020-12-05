import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function AlumnosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="colmich"
        component={Home}
        options={{ title: "Principal" }}
      />
    </Stack.Navigator>
  );
}
