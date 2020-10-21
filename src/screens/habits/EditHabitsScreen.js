import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EditHabitsScreen = () => {
    return (
        <View>
            <Text style={styles.textStyles}>Edit Habits Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    }
})

export default EditHabitsScreen;