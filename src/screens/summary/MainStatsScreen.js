import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MainStatsScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyles}>Main Stats Screen!</Text>
            <Button title="Go to home screen" onPress={() => navigation.navigate("Home")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    }
});

export default MainStatsScreen;