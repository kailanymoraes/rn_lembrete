import { Pressable, Image, Text, View, StyleSheet, Switch } from "react-native";
import { Lembrete } from "../../types/lembrete";
import { Link } from "expo-router";

type Props = {
    lembrete: Lembrete
}

//export default function LembreteItem({lembrete} : Props) {
    export function LembreteItem({lembrete}: Props) {
        return (
     
            <Link href={`/lembrete/${lembrete.LembreteId}`} asChild>      
            
     
            <Pressable style={styles.conteiner}>
                <Text style={styles.lembreteTitle}>Arrumar a casa</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    value={true}
                // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                // ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                // value={isEnabled}
                />
            </Pressable>
     
            </Link>
     
        );
    }
 
const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 20,
        borderBottomColor: "#ddd",
        borderStyle: "solid",
        borderBottomWidth: 1
    },
    completedConteiner: {
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 12,
        flexDirection: "row",
        width: "30%"
    },
    lembreteTitle: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 16,
        width: "65%"
    },
    completedText: {
        fontStyle: "italic",
        fontSize: 14,
        color: "gray"
    }
})
     
     
