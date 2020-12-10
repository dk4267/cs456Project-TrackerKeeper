import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Context as GoalsContext } from '../context/GoalsContext';
import {Colors} from './DarkTheme';


const Goals = ({ nav }) => {

    const { state, getGoals } = useContext(GoalsContext);

    useEffect(() => {
        getGoals();
        const listener = nav.addListener('didFocus', () => {
            getGoals();
        });

        return () => {
            listener.remove();
        }
    }, [])

    return (
        <View style={styles.mainStyle}>
            <View style={styles.headStyle}>
                <TouchableOpacity>
                    <AntDesign name="edit" size={25} style={{color: Colors.text.primary}} onPress={() => nav.navigate('EditGoals')}/>
                </TouchableOpacity>
                <Text style={styles.titleStyle}>Long-Term Goals:</Text>
            </View>
            <View>
                <Text style={styles.itemStyle} >{state[0]}</Text>
                <Text style={styles.itemStyle} >{state[1]}</Text>
                <Text style={styles.itemStyle} >{state[2]}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 24,
        marginLeft: 10,
        color: Colors.text.primary,
    },
    headStyle: {
        flexDirection: "row",
        marginVertical: 25,
        color: Colors.text.primary,
    },
    itemStyle: {
        fontSize: 18,
        marginBottom: 15,
        color: Colors.text.primary,
    },
    mainStyle: {
        alignItems: "center"
    }

});

export default Goals;