import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyles}>Home screen!</Text>
            <Button title="Go to habits screen" onPress={() => navigation.navigate('MainHabits')}/>
            <Button title="Go to tasks screen" onPress={() => navigation.navigate('MainTasks')}/>
            <Button title="Go to mood screen" onPress={() => navigation.navigate("MainMood")}/>
            <Button title="Go to summary screen" onPress={() => navigation.navigate("Calendar")} />
        </View>
    )
}

styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    }

});

export default HomeScreen;