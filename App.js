import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from "./Navigation/TabNavigator";

const MyTheme = {
  colors: {
    card: "#345d73",
    text: "#DFDFDF"
  }
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <TabNavigator  />
    </NavigationContainer>
  );
}