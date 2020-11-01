import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const EditGoalsScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyles}>edit goals screen!</Text>
            <Button title='go to home screen' onPress={() => navigation.navigate('Home')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    }

});

export default EditGoalsScreen;