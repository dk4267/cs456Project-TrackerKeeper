import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const DayDetailScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyles}>Day Detail Screen!</Text>
            <Button title=" Go to home screen" onPress={() => navigation.navigate('Home')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    }
})

export default DayDetailScreen;