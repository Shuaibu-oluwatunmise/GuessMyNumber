import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

function Numbercontainer({children}) {
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default Numbercontainer;


const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: Colors.secondary500,
        padding: 24,
        margin: 24,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText:{
        color: Colors.secondary500,
        fontSize: 36,
        fontWeight:'bold'
    }
});