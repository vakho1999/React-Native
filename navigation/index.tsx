import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import cartScreen from '../screens/cartScreen';
import HomeScreen from '../screens/HomeScreen';
// import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import { LoginContext } from '../utils/LoginProvider';

const Stack = createStackNavigator();
export default function AppStack() {
  const { user, cart } = useContext(LoginContext);
  const isLoading = false;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {cart ? (
          <Stack.Screen
            name="cart"
            options={{ headerShown: false }}
            component={cartScreen}
          />
        ) : user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="signin" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}