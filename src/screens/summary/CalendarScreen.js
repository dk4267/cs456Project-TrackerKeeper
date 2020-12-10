import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {Colors} from '../../components/DarkTheme';

const CalendarScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>Calendar Screen!</Text>
            <Button title="Go to Day Detail Screen" onPress={() => navigation.navigate('DayDetail')}/>
            <Button title="Go to Main Stats Screen" onPress={() => navigation.navigate("MainStats")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        height: '100%'
    },
    textStyles: {
        fontSize: 30,
        color: Colors.text.primary
    }
})

export default CalendarScreen;