import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const JournalScreen = ({ navigation}) => {
    return (
        <View>
            <Text style={styles.textStyles}>Journal Screen!</Text>
            <Button title="Go to mood stats screen" onPress={() => navigation.navigate('MoodStats')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    }
})

export default JournalScreen;