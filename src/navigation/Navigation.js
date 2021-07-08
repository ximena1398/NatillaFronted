import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Inicio } from '../scenes/Inicio/Inicio'
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

export const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Inicio" component={Inicio} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}