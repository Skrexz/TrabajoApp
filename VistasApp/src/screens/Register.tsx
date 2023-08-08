import React, { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { Background } from "../components/Background";
import { WhiteLogo } from "../components/WhiteLogo";
import { loginStyles } from "../theme/loginTheme";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import Picker from "react-native-picker-select";

interface Props extends StackScreenProps<any, any>{};

export const Register = ({ navigation }: Props) => {

        const [isVisible, setIstVisible] = useState(false);
        const [selectedValue, setSelectedValue] = useState("Bucaramanga");

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
                onPress={() => navigation.navigate('Listado')}
                >
                    <Text style={loginStyles.buttonText}>Ver Listado </Text>
                    
                </TouchableOpacity>
            </View>

            <View style={loginStyles.buttonMedio}>

            <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={() => setIstVisible(true)}
                >
                    <Text style={loginStyles.buttonText}>Crear un usuario </Text>
                    
                </TouchableOpacity>
            </View>

            <View style={loginStyles.volver}>

            <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={() => navigation.goBack()}
                >
                    <Text style={loginStyles.buttonText}>Volver </Text>
                    
                </TouchableOpacity>
            </View>

            <Modal
                animationType="fade"
                visible={isVisible}
                transparent={true}
            >
                <View style={{
                    flex:1,
                    backgroundColor: 'rgba(0,0,0,0.6)'
                }}
                
                >
                    <View style={loginStyles.estiloscajas}>
                        <TextInput >
                        <Text>Ingrese su Documento</Text>
                        </TextInput>
                    </View>

                    <View style={loginStyles.estiloscajas}>
                        <TextInput >
                        <Text>Ingrese su Nombre</Text>
                        </TextInput>
                    </View>

                    <View style={loginStyles.estiloscajas}>
                        <TextInput >
                        <Text>Ingrese su primer Apellido</Text>
                        </TextInput>
                    </View>

                    <View style={loginStyles.estiloscajas}>
                        <TextInput >
                        <Text>Ingrese su segundo Apellido</Text>
                        </TextInput>
                    </View>

                    <View style={loginStyles.estiloscajas}>
                        <TextInput >
                        <Text>Ingrese su Dirección</Text>
                        </TextInput>
                    </View>

                    <View style={loginStyles.estiloscajas}>
                        <TextInput >
                        <Text>Ingrese su Telefono</Text>
                        </TextInput>
                    </View>

                    <View style={loginStyles.estiloscajas}>
                        <TextInput >
                        <Text>Ingrese su Correo Electrónico</Text>
                        </TextInput>
                    </View>

                    <View style={loginStyles.estiloscajas}>
                    <TextInput >
                        <Text>Ingrese su Ciudad</Text>
                        </TextInput>
                    </View>

                    <View>
                        <TouchableOpacity
                        activeOpacity={0.8}
                        style={loginStyles.button}
                        onPress={() => setIstVisible(false)}
                        >
                                <Text>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        </View>
    )
}