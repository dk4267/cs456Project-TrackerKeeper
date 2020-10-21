import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CalendarScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyles}>Calendar Screen!</Text>
            <Button title="Go to Day Detail Screen" onPress={() => navigation.navigate('DayDetail')}/>
            <Button title="Go to Main Stats Screen" onPress={() => navigation.navigate("MainStats")} />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    }
})

export default CalendarScreen;