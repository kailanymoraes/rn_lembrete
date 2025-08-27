import { View, Text, StyleSheet, Switch,TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Stack,useLocalSearchParams } from "expo-router";
import { Button } from "../../component/Button/Button";
import { criarLembrete} from "../../service/lembrete";
import { useState } from "react";
import { Lembrete } from "../../types/lembrete";

export default function add() {
    const [titulo, setTitulo] = useState<string>('');
    const [corpo, setCorpo] = useState<string>('');
    const [status, setStatus] = useState<boolean>(false);
 
    async function handleLembreteAdd() {
        //console.log(titulo + " " + corpo + " " + status.toString());
        try {
            const novoLembrete:Omit<Lembrete,'LembreteId'>= {            
                "TituloLembrete":titulo,
                "CorpoLembrete":corpo,
                "StatusLembrete":status,
            };
            await criarLembrete(novoLembrete);
            Alert.alert('Sucesso', 'Lembrete criado com sucesso!');
            router.replace('/(home)/listLembrete');
        } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Não foi possível criar o lembrete.');
        }
    };
 


    return (
        < SafeAreaView style = { styles.container } >
        <View style={styles.productArea}>

            <View style={styles.detailsArea}>

                <Text style={styles.title}>Título</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTitulo}
                    textAlign='center'
                />


                <Text style={styles.description}>Descrição</Text>
                <TextInput
                    editable={true}
                    multiline={true}
                    numberOfLines={6}
                    maxLength={60}
                    // onChangeText={text => onChangeText(text)}
                    onChangeText={setCorpo}
                    style={styles.input}
                />
                <View style={styles.switchArea}>
                    <Text>Não Concluída</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        value={false}
                         onValueChange={setStatus}
                    />
                    <Text>Concluída</Text>
                </View>
            </View>
        </View>
        <View style={styles.buttonArea}>
            <Button title="Salvar" function={handleLembreteAdd} />
        </View>
    </SafeAreaView >
    )

}


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',

        
    },
    productArea:{
        marginTop: 20,
        borderWidth: 2,
        borderBlockColor: '#4294e7',
        borderStyle: 'solid',
        borderRadius: 20,
        width: 350,
        height: 300,
        justifyContent:'center',

    },
    detailsArea:{
        fontSize: 18,
        alignItems: 'flex-start',
        marginLeft: 30
        

    },
    title:{
        fontSize: 18,
    },
    input:{
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 15,
        width: 250,
        marginTop: 5
    },
    description: {
        fontSize: 18,
       marginTop: 20
    },
    switchArea: {
        fontSize: 18,
        flexDirection: 'row',
        gap: 20,
        marginTop: 20
    },
    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        gap: 30
    }

})