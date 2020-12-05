import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Convocatoria from "../screens/Convocatoria";

const Stack = createStackNavigator();

export default function MateriaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Convocatoria"
        component={Convocatoria}
        options={{ title: "Materias" }}
      />
    </Stack.Navigator>
  );
}
