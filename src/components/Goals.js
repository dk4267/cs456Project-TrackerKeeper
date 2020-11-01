import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Goals = ({ nav }) => {

    const goalList = ['Graduate with a 3.8 GPA', 'Move to Japan', 'Run a half marathon'];

    return (
        <View style={styles.mainStyle}>
            <View style={styles.headStyle}>
                <TouchableOpacity>
                    <AntDesign name="edit" size={25} onPress={() => nav.navigate('EditGoals')}/>
                </TouchableOpacity>
                <Text style={styles.titleStyle}>Long-Term Goals:</Text>
            </View>
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
        marginLeft: 10
    },
    headStyle: {
        flexDirection: "row",
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