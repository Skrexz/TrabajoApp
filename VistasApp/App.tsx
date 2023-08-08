import 'react-native-gesture-handler';
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { Background } from './src/components/Background';
import { WhiteLogo } from './src/components/WhiteLogo';
import { Login } from './src/screens/Login';
import { Register } from './src/screens/Register';
import { StackNavigator } from './src/navigator/Navigator';

 const App = () => {

  return(

        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
  )
}

export default App;