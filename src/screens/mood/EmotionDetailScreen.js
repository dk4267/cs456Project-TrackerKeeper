import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const EmotionDetailScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyles}>Emotion Detail Screen!</Text>
            <Button title="Go to journal screen" onPress={() => navigation.navigate('Journal')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    }
})

export default EmotionDetailScreen;