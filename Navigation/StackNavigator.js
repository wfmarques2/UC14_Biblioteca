import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detalhes from "../src/Screens/Detalhes";
import Estante from "../src/Screens/Estante";




const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator>
           <Stack.Screen component={Estante} name="Biblioteca - Estante"/>
           <Stack.Screen component={Detalhes} name="Detalhes"/>   
               
        </Stack.Navigator>
    )
}