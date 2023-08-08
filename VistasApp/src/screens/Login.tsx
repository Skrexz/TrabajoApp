import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { Background } from "../components/Background";
import { WhiteLogo } from "../components/WhiteLogo";
import { loginStyles } from "../theme/loginTheme";
import { StackScreenProps } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";



interface Props extends StackScreenProps<any, any>{};

export const Login = ({navigation}: Props ) => {

    

    return(
        <View>
            <Background/>

            <View>
                <WhiteLogo/>
            </View>

            <View style={loginStyles.buttonSuper}>

            <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={() => navigation.navigate('Register')}
                >
                    <Text style={loginStyles.buttonText}>Ingresar </Text>
                    
                </TouchableOpacity>
            </View>
        </View>
    )
}