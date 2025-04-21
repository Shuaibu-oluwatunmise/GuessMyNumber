import {Text, View, StyleSheet} from 'react-native'

function Title ({text}){
    return(
        <View>
            <Text style={styles.title}>
                {text}
            </Text>
        </View>
    );
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        padding: 12,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2
    }
});