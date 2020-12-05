import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeStack from "./HomeStack";
import BibliotecaStack from "./BibliotecaStack";
import ReservacionStack from "./ReservacionStack";
import ConvocatoriaStack from "./ConvocatoriaStack";
import ContactoStack from "./ContactoStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680"
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
      >
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="biblioteca"
          component={BibliotecaStack}
          options={{ title: "Biblioteca" }}
        />
        <Tab.Screen
          name="reservaciones"
          component={ReservacionStack}
          options={{ title: "Reservaciones" }}
        />
        <Tab.Screen
          name="convocatorias"
          component={ConvocatoriaStack}
          options={{ title: "Convocatorias" }}
        />
        <Tab.Screen
          name="contacto"
          component={ContactoStack}
          options={{ title: "Contacto" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "home":
      iconName = "home-variant";
      break;
    case "biblioteca":
      iconName = "library-shelves";
      break;
    case "reservaciones":
      iconName = "calendar-check";
      break;
    case "convocatorias":
      iconName = "book";
      break;
    case "contacto":
      iconName = "email-mark-as-unread";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
