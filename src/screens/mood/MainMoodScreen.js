import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MainMoodScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyles}>Main Mood Screen!</Text>
            <Button title="Go to emotion detail screen" onPress={() => navigation.navigate('EmotionDetail')}/>
            <Button title="Go to mood stats screen" onPress={() => navigation.navigate('MoodStats')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    }
});

export default MainMoodScreen;