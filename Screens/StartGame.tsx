import { TextInput, Pressable, View, StyleSheet, Alert} from "react-native";
import PrimaryButton from "@/components/PrimaryButton";
import { useState } from "react";
import { Colors } from "@/constants/Colors";

function StartGameScreen(props: any) {
    const[enteredNumber, setenteredNumber] = useState('')

    function NumberInputHandler(enteredText: string) {
        setenteredNumber(enteredText);
    }

    function resetInputHandler() {
        setenteredNumber('');
    }

    function ConfirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid Number!',
                'Number has to be between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
             );
            return;
        }
        props.onconfirmed(chosenNumber)
        
    }

    return (
        <View style={styles.inputcontainer}>
            <TextInput 
                style={styles.numberinput}
                maxLength={2}
                keyboardType="number-pad"
                value={enteredNumber}
                onChangeText={NumberInputHandler}
            />
            <View style={styles.buttonscontainer}>
                <View style={styles.buttoncontainer}>
                    <PrimaryButton 
                        children="Delete"
                        havepressed = {resetInputHandler}
                    />
                </View>
                <View style={styles.buttoncontainer}>
                    <PrimaryButton 
                        children="Confirm"
                        havepressed = {ConfirmInputHandler}
                    />
                </View>
            </View>
        </View>

    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputcontainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        backgroundColor: Colors.primary500,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity:0.25,
    },
    numberinput:{
        height: 70,
        width:50,
        fontSize: 32,
        borderBottomColor: Colors.secondary500,
        borderBottomWidth: 2,
        color: Colors.secondary500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonscontainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttoncontainer:{
        flex: 1
    }
})