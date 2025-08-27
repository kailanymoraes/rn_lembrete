import { StyleSheet, Image, Text, View } from "react-native";
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Button } from "../component/Button/Button";


export default function Index() {

    function navigate(){
        router.replace('/list');
    }

    return (
        <SafeAreaView style={styles.container}>
                <Image
                    source={require('../assets/logoLembrete.png')}
                    style={styles.logo}
                    resizeMode='cover'
                />

 
 
            <Text style={styles.titulo}>App Lembretes - 2025 ©</Text>
            <Button title="Entrar" function={navigate}/>
 
 
 
 
 
        </SafeAreaView >
 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        gap: 16,
        backgroundColor: '#E0EBEE',
    },
    logo: {
        height: 150,
        width: 150,
        marginBottom: 20,
        alignSelf: 'center',
        borderColor: "#2168A6",
        borderWidth: 1,
 
        borderRadius: 20,
    },
    tituloContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    titulo: {
        fontSize: 32,
        fontWeight: '900',
        alignSelf: 'center'
    },
    texto: {
        fontSize: 16,
        alignSelf: 'center'
    },
    destaque: {
        color: "#2168A6",
    }
})