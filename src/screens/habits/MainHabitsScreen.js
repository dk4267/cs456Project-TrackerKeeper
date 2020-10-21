import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainHabitsScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyles}>Main Habits Screen!</Text>
            <Button style={styles.buttonStyles} title="Go to Edit Habits screen" onPress={() => navigation.navigate('EditHabits')} />
            <Button style={styles.buttonStyles} title="Go to Habits Stats screen" onPress={() => navigation.navigate('HabitsStats')} />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    },
    buttonStyles: {
        margin: 15
    }
})

export default MainHabitsScreen;