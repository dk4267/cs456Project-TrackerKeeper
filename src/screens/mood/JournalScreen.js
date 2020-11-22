import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const JournalScreen = ({ navigation}) => {
    const [mood, setMood] = React.useState('')


    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>Have any thoughts you'd like to jot down today?</Text>
            <TextInput style={styles.inputStyles} value={mood} multiline={true} maxLength={80} onChangeText={(text) => setMood(text)}/>
            <Button title="Save and go to stats" onPress={() => navigation.navigate('MoodStats')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        
    },
    container: {
        flex: 1,
        backgroundColor: '#71B2E1',
        justifyContent: 'center',
        justifyContent: 'space-around',
        padding: 10,
        
        
    },
    inputStyles: {
        backgroundColor: 'white',
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
        marginHorizontal: 15,
        width: "92%",
        height: '50%',
       textAlignVertical: 'top',

        
    },
})

export default JournalScreen;