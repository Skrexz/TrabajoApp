import React from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Listado } from '../screens/Listado';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle:{
            
            backgroundColor: 'white'
        }
        
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Listado" component={Listado} />
      
    </Stack.Navigator>
  )
}