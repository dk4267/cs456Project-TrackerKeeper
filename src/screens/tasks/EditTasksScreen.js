import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const EditTasksScreen = () => {
    return (
        <View>
            <Text style={styles.textStyles}>Edit Tasks Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    }
});

export default EditTasksScreen;