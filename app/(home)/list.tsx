import { Text, View, StyleSheet, FlatList } from "react-native";
import { LembreteItem } from "../../component/lembreteItem/lembreteItem";
import { getAllLembretesAPI } from "../../service/lembrete";
import React, {useEffect, useState} from "react";
import { Lembrete } from "../../types/lembrete";
import { data } from "../../data";

 
 
export default function List() {

    const [lembretes, setLembretes] = useState<Lembrete[]>([]);
 
    async function getLembretesAll()  {
        const listaLembretes = await getAllLembretesAPI();
        console.log(listaLembretes);
        setLembretes(listaLembretes);      
    }
    useEffect(() => {
        getLembretesAll();  
        console.log(lembretes);
    }, []);
 
    
    return (
        <View style={styles.container}>
            <FlatList data={lembretes} //informando a fonte de dados da flatlist
                renderItem={({ item }) => <LembreteItem lembrete={item} />} //informando a função que renderiza cada item, estamos usando um arrow function que renderizará cada item, estamos usando um arrow function no caso
                keyExtractor={item => item.LembreteId.toString()}//identificação do index de cada item
                style={styles.list} />
 
            {/*   <LembreteItem lembrete={lembretes[0]} />
            <LembreteItem lembrete={lembretes[1]}/>
            <LembreteItem lembrete={lembretes[2]}/>
            <LembreteItem lembrete={lembretes[4]}/>
            <LembreteItem lembrete={lembretes[5]}/>
            <LembreteItem lembrete={lembretes[6]}/> */}
        </View>
    )
 
 
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E0EBEE",
    },
    list: {
        width: "100%",
        padding: 16,
    }
 
})