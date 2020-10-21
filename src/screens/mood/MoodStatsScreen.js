import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const MoodStatsScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyles}>Mood Stat Screen!</Text>
            <Button title="Go to main stats screen" onPress={() => navigation.navigate('MainStats')}/>
            <Button title="Go to main mood screen" onPress={() => navigation.navigate('MainMood')}/>
            <Button title="Go to home screen" onPress={() => navigation.navigate('Home')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    }
});

export default MoodStatsScreen;