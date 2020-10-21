import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MainTasksScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyles}>Main Tasks Screen!</Text>
            <Button title="Go to edit tasks screen" onPress={() => navigation.navigate('EditTasks')}/>
            <Button title="Go to tasks stats screen" onPress={() => navigation.navigate('TasksStats')}/>
        </View>
    )
}

styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    }
});

export default MainTasksScreen;