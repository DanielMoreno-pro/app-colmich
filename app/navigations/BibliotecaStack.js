import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Biblioteca from "../screens/Biblioteca";

const Stack = createStackNavigator();

export default function AlumnosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="biblioteca"
        component={Biblioteca}
        options={{ title: "Biblioteca" }}
      />
    </Stack.Navigator>
  );
}
