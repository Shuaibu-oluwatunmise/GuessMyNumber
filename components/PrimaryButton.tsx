import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

function PrimaryButton (props: any) {
    return (
        <View style={styles.buttoncontainerOuter}>
            <Pressable 
                android_ripple = {{color: Colors.Primary600}} 
                style={({pressed}) => pressed ? [styles.buttoncontainerInner, styles.pressed]: styles.buttoncontainerInner}
                onPress={props.havepressed}
            >
                <Text style={styles.buttontext}>{props.children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttoncontainerOuter:{
        margin: 4,
        borderRadius: 18,
        overflow: 'hidden'
    },
    buttoncontainerInner:{
        backgroundColor: Colors.primary700,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttontext:{
        color: 'white',
        textAlign: 'center'
    },
    pressed:{
        opacity:0.75,

    }
});