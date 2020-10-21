import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HabitsStatsScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyles}>Habits Stats Screen!</Text>
            <Button title="Go to home screen" onPress={() => navigation.navigate("Home")}/>
            <Button title="See all stats" onPress={() => navigation.navigate("MainStats")} />
        </View>
    )
}

styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    }
})

export default HabitsStatsScreen;