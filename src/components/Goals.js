import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const Goals = () => {

    const goalList = ['Graduate with a 3.8 GPA', 'Move to Japan', 'Run a half marathon']

    return (
        <View style={styles.mainStyle}>
            <Text style={styles.titleStyle}>Long-Term Goals:</Text>
            <FlatList 
                data={goalList}
                keyExtractor={item => item}
                renderItem={({item}) => <Text style={styles.itemStyle}>{item}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 24,
        marginVertical: 25
    },
    itemStyle: {
        fontSize: 18,
        marginBottom: 15
    },
    mainStyle: {
        alignItems: "center"
    }

});

export default Goals;