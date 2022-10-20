import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import StackNavigator from "./StackNavigator";
import Cadastro from "../src/Screens/Cadastro";
import Home from "../src/Screens/Home";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = 'home';
                } else if (route.name === 'Cadastro') {
                    iconName = 'form-select'
                } else if (route.name === 'Estante') {
                    iconName = 'bookshelf'
                      
                }

                return <Icon name={iconName} size={size} color={color} />;
            },

            tabBarActiveTintColor: '#FAB193',
            tabBarInactiveTintColor: '#B1CBE0',          
            tabBarStyle: { borderTopWidth: 0 }

        })}

        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Cadastro" component={Cadastro} />
            <Tab.Screen name="Estante" component={StackNavigator} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}