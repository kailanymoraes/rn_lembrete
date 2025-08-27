import { Pressable, Text } from "react-native";
import { styles } from "./ButtonStyle";

type Props = {
    title: string,
    function: () => void
}

export function Button(props:Props) {


    return(
        <Pressable onPress={props.function} style={styles.button}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </Pressable>
    );
}