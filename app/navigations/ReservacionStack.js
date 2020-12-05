import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Reservacion from "../screens/Reservacion/Reservacion";
import ReservacionInfo from "../screens/Reservacion/MaestroInfo";


const Stack = createStackNavigator();

export default function MaestroStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="reservacion"
        component={Reservacion}
        options={{ title: "Reservacion" }}
      />
       <Stack.Screen
        name="convocatorias-info"
        component={ReservacionInfo}
        options={{ title: "Detalle de eventos" }}
      />
    </Stack.Navigator>
  );
}
