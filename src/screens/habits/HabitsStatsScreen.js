import React, { useContext, useEffect } from 'react';
import { View, SafeAreaView, ScrollView , Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { Context } from '../../context/HabitsContext';
import { Card, List, Checkbox, Button, FAB, Icon,  } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; 


const MainHabitsScreen = ({ navigation }) => {


    return (
        
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.titleContainer}>
                <Text style={styles.habitTitle}>
                    Your Habits Statistics
                
                    
                </Text>
                
                    <Text style={styles.inspirationalText}>test</Text>  

                </View>
            </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        marginTop:8,
    },
    buttonStyles: {
        margin: 15
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 2,
    },
    habitTitle: {
        flexGrow: 1,
        fontSize: 24,
        fontWeight: 'bold',
    },
    addButton: {
        margin: 16,
        padding: 8,
        position:'absolute',
        right:16,
        top:-56,
        borderRadius: 100
        

    },

    habitCard: {
        marginTop: 10,
        marginHorizontal: 16,

    },

    habitItem: {

        flex: 0,
        flexDirection: 'row',
        padding: 10,
        
    },

    habitCheckbox: {
        flexGrow: 0, 
    },
    habitInput: {
        flexGrow: 1, 
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        fontSize: 18,
        width: 220,
        backgroundColor: '#F0F0F0'
    },
    habitName: {
        flexGrow: 1, 
        fontSize: 18,
        width: 220,
        lineHeight: 36,

    },
    habitStreak: {
        flexGrow: 0, 
        marginLeft: 15,
        width: 65,
    },
    habitEdit: {
        flexGrow: 0, 
    },
    inspirationalText: {
        fontSize:36,
        textAlign: 'center',
        paddingVertical: 24,
        paddingHorizontal: 16,
        opacity: .4,

    },
    statsButton: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    statsButtonContent: {
        height: 100,
    },    
})

export default MainHabitsScreen;