import { View, Text, StyleSheet, Switch,TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../component/Button/Button";
import { atualizarLembrete, getLembreteByIdAPI, deleteLembrete } from "../../service/lembrete";
import { router, Stack,useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Lembrete } from "../../types/lembrete";

export default function LembreteEditScreen() {

    const {id} = useLocalSearchParams();

    const idLembrete = parseInt(id as string);

    // const lembrete = getLembreteById(idLembrete);

    // if (!lembrete) return router.back();

    // function handleLembreteAction() {

    // }
    // function onChangeText() {

    // }

    const [lembrete, setLembrete] = useState<Lembrete>();
    const [titulo, setTitulo] = useState<string>('');
    const [corpo, setCorpo] = useState<string>('');
    const [status, setStatus] = useState<boolean>(false);


    async function handleLembreteSave() {
        //console.log(titulo + " " + corpo + " " + status?.toString());
        try {
            const novoLembrete: Lembrete = {
                "LembreteId": idLembrete,
                "TituloLembrete": titulo,
                "CorpoLembrete": corpo,
                "StatusLembrete": status,
            };
            await atualizarLembrete(novoLembrete);
            Alert.alert('Sucesso', 'Lembrete salvo com sucesso!');
            router.replace('/../(home)/listLembrete');
        } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Não foi possível salvar o lembrete.');
        }
    };
    async function handleLembreteDelete() {
        //console.log(titulo + " " + corpo + " " + status?.toString());
        try {
            await deleteLembrete(idLembrete);
            Alert.alert('Sucesso', 'Lembrete excluído com sucesso!');
            router.replace('/../(home)/listLembrete');
        } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Não foi possível excluir o lembrete.');
        }
    };

    async function getLembreteById() {
        const lembreteUnico = await getLembreteByIdAPI(idLembrete);
        console.log(lembreteUnico);
        setLembrete(lembreteUnico);
        setTitulo(lembreteUnico.tituloLembrete);
        setCorpo(lembreteUnico.corpoLembrete);
        setStatus(lembreteUnico.statusLembrete);
    }
    useEffect(() => {
        getLembreteById();
    }, []);
 


    return (
        < SafeAreaView style = { styles.container } >
        <View style={styles.productArea}>

            <View style={styles.detailsArea}>

                <Text style={styles.title}>Título</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTitulo}
                    value={titulo}
                    textAlign='center'
                />


                <Text style={styles.description}>Descrição</Text>
                <TextInput
                    editable={true}
                    multiline={true}
                    numberOfLines={6}
                    maxLength={60}
                    // onChangeText={text => onChangeText(text)}
                    onChangeText={setTitulo}
                    value={titulo}
                    style={styles.input}
                />
                <View style={styles.switchArea}>
                    <Text>Não Concluída</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        value={status}
                    // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={setStatus}
                    // value={isEnabled}
                    />
                    <Text>Concluída</Text>
                </View>
            </View>
        </View>
        <View style={styles.buttonArea}>
            <Button title="Salvar" function={handleLembreteSave} />
            <Button title="Excluir" function={handleLembreteSave} />
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