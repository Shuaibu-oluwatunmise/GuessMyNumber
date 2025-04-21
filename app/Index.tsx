import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "@/Screens/StartGame";
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from "react";
import GameScreen from "@/Screens/GameScreen";
import { Colors } from "@/constants/Colors";
import GameOverScreen from "@/Screens/GameOverScreen";

export default function App() {
    const [UserNumber, setUserNumber] = useState();
    const [gameIsOver, setgameIsOver] = useState(true);

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setgameIsOver(false);
    }

    function GameOverHandler() {
        setgameIsOver(true);
    }

    let screen = <StartGameScreen onconfirmed={pickedNumberHandler}/>;

    if (UserNumber) {
        screen = <GameScreen UserNumber={UserNumber} onGameOver={GameOverHandler}/>
    }

    if (gameIsOver && UserNumber) {
        screen = <GameOverScreen/>
    }

    return (
        <LinearGradient colors={[Colors.primary500, Colors.secondary500]} style={styles.rootscreen}>
            <ImageBackground 
                source={require('@/assets/images/BGMAN.png')}
                resizeMode="cover"
                style={styles.rootscreen}
                imageStyle={styles.backgroundimage}
            >
            <SafeAreaView style={styles.rootscreen}>
                {screen}  
            </SafeAreaView>
            </ImageBackground> 
        </LinearGradient>                       
    );
}

const styles=StyleSheet.create({
    rootscreen:{
        flex: 1,
    },
    backgroundimage:{
        opacity: 0.15
    }
});