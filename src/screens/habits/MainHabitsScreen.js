import React, { useContext, useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView , Text, StyleSheet, TextInput, Pressable, FlatList, TouchableOpacity  } from 'react-native';
import { Context } from '../../context/HabitsContext';
import { Card, List, Checkbox, Button, FAB, Icon,  } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; 

let inspirationalInsight = "You completed 72% of your habits this week! Keep it up!";


const MainHabitsScreen = ({ navigation }) => {

    const { state, getHabits, addHabit, editHabit, deleteHabit, markHabit } = useContext(Context);
    const [addHabitActivated, setAddHabitActivated] = useState(false);
    const [editHabitId, setEditHabitId] = useState(-1);
    const [addText, setAddText] = useState('');

    useEffect(() => {
        getHabits();
    })

    const setUpAddHabit = () => {
        setAddHabitActivated(true);
    }

    const setUpEditHabit = (id) => {
        setEditHabitId(id);
        console.log("habit id to edit is " + id);
    }

    return (
        
        <SafeAreaView style={styles.container}>
        <FAB icon="plus" style={styles.addButton} onPress={() => setUpAddHabit()} />    
            <ScrollView style={styles.scrollView}>
                <View style={styles.titleContainer}>
                <Text style={styles.habitTitle}>
                    Your Habits
                
                    
                </Text>
                

                </View>
                {
                    state.map((item) => (
                        
                            
                            editHabitId === item.id ? 
                            <Card style={styles.habitCard} key={ item => item.habitName}><View style={styles.habitItem}><TextInput
                        placeholder={item.habitName}
                        style={styles.habitInput}
                        onChangeText={text => setAddText(text)}
                        onSubmitEditing={() => {
                            editHabit(item.id, addText);
                            setEditHabitId(-1);}}
                    /></View></Card> :
                            <Card style={styles.habitCard} key={item => item.habitName} onLongPress={() => setUpEditHabit(item.id)} >
                                <View style={styles.habitItem}>
                                    <Checkbox style={styles.habitCheckbox} status={item.checked ? 'checked' : 'unchecked'} onPress={() => markHabit(item.id, !item.checked)} />
                                  
                                    <Text style={styles.habitName}>{item.habitName}</Text>
                                    <Text style={styles.habitStreak}>{item.streak}{" day\nstreak!"}</Text>
                                    
                                   
                                        <MaterialIcons name="delete-forever" style={styles.removeHabit} size={30} onPress={() => deleteHabit(item.id)} />
                                    </View>
                            </Card>
            
                        
                    
                    ))}
                    {
                        addHabitActivated ? <Card style={styles.habitCard} key="addHabit"><View style={styles.habitItem}><TextInput
                        placeholder="New habit"
                        style={styles.habitInput}
                        onChangeText={text => setAddText(text)}
                        onSubmitEditing={() => {
                            addHabit(addText);
                            setAddHabitActivated(false);}}
                    /></View></Card> : null
                        }

                    
                    <Text style={styles.inspirationalText}>{inspirationalInsight}</Text>  
                    <Button icon="chart-bar" contentStyle={styles.statsButtonContent} style={styles.statsButton} labelStyle={styles.statsButtonText} mode="contained" onPress={() => navigation.navigate('HabitsStats')}>
                        See stats about your habits
                    </Button>  
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
        width: 180,
        lineHeight: 36,

    },
    habitStreak: {
        flexGrow: 0, 
        marginLeft: 15,
        width: 65,
    },

    removeHabit: {
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
        marginHorizontal: 10,
        padding: 10,
        
    },
    statsButtonContent: {
        height: 50,
    },    
})

export default MainHabitsScreen;