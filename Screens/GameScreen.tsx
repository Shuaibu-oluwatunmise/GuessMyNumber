import {Text, View, StyleSheet, Alert} from 'react-native'
import Title from '@/components/Title';
import { useState, useEffect } from 'react';
import Numbercontainer from '@/components/Game/NumberContainer';
import PrimaryButton from '@/components/PrimaryButton';

function generateRandomBetween(min, max, exclude){
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else{
        return randomNumber;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(props) {
    const initialGuess = generateRandomBetween(1, 100, props.UserNumber);
    const [currentGuess, setcurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === props.UserNumber){
            props.onGameOver();
        }
    }, [currentGuess, props.UserNumber, props.onGameOver]);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < props.UserNumber) || 
            (direction === 'greater' && currentGuess > props.UserNumber)
        ) {
            Alert.alert("Hold up Nigga", "Bloody Liar you are 👀😂.", 
                [{text: 'Caught me 🙌🏾', style: 'cancel'}]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess+1;
        }

        const newRandnumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        console.log(newRandnumber);
        setcurrentGuess(newRandnumber);
    }

    return(
        <View style={styles.screen}>
            <Title text="Computer's Guess"/>
            <Numbercontainer children={currentGuess} />
            <View>
                <Text> Higher or Lower?</Text>
                <View>
                    <View>
                        <PrimaryButton 
                            children='+' 
                            havepressed={nextGuessHandler.bind(this, 'greater')}/>
                    </View>
                    <View>
                        <PrimaryButton 
                            children = '-'
                            havepressed={nextGuessHandler.bind(this, 'lower')}/>
                    </View>
                </View>
            </View>
            <View>
               <Text>Log Rounds</Text>
            </View>
        </View>
    );
}
export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 24,
    },
});