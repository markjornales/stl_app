import { View, Text } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Authentication/Login';
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';


const Stack = createNativeStackNavigator();

export default function Navigations() {

  useEffect(() => {
    SplashScreen.hide();
  }, [])


  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}