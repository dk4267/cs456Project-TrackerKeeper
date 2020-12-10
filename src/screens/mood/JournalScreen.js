import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import {Colors} from '../../components/DarkTheme';

const JournalScreen = ({ navigation}) => {
    const [mood, setMood] = React.useState('')


    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>Have any thoughts you'd like to jot down today?</Text>
            <TextInput style={styles.inputStyles} value={mood} multiline={true} maxLength={80} onChangeText={(text) => setMood(text)}/>
            <TouchableOpacity style={styles.statsButton} onPress={() => navigation.navigate('MoodStats')}>
                <Text style={styles.statsButtonText}>Save and go to stats</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        color: Colors.text.primary,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        
    },
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        justifyContent: 'space-around',
        padding: 10,
        
        
    },
    inputStyles: {
        backgroundColor: Colors.dp08,
        borderBottomColor: Colors.mood,
        borderBottomWidth:1,
        color: Colors.text.secondary,
        fontSize: 18,
        marginBottom: 15,
        padding: 5,
        margin: 5,
        marginHorizontal: 15,
        width: "92%",
        height: '50%',
        textAlignVertical: 'top',

        
    },

    statsButton: {
        padding: 12,
        borderRadius: 3,
        backgroundColor: Colors.mood
    },
    statsButtonText: {
        color: Colors.text.darkSecondary,
        textAlign: 'center',
        fontSize: 20,
    },
})

export default JournalScreen;