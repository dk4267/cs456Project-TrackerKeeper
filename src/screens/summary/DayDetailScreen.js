import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {Colors} from '../../components/DarkTheme';

const DayDetailScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>Day Detail Screen!</Text>
            <Button title=" Go to home screen" onPress={() => navigation.navigate('Home')}/>
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

export default DayDetailScreen;