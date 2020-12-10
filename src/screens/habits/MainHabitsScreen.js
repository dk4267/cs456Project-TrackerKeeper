import React, { useContext, useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView , Text, StyleSheet, TextInput, Pressable, FlatList, TouchableOpacity  } from 'react-native';
import { Context } from '../../context/HabitsContext';
import { Card, List, Checkbox, Button, FAB, Icon,  } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; 
import {Colors} from '../../components/DarkTheme';

let inspirationalInsight = "You completed 72% of your habits this week! Keep it up!";


const MainHabitsScreen = ({ navigation }) => {

    const { state, getHabits, addHabit, editHabit, deleteHabit, markHabit } = useContext(Context);
    const [addHabitActivated, setAddHabitActivated] = useState(false);
    const [editHabitId, setEditHabitId] = useState(-1);
    const [addText, setAddText] = useState('');

    useEffect(() => {
        getHabits();
    }, [state]);

    useEffect(() => {
        navigation.setParams({addfunction: setUpAddHabit});
    }, [])

    const setUpAddHabit = () => {
        setAddHabitActivated(true);
    }

    const setUpEditHabit = (id) => {
        setEditHabitId(id);
        console.log("habit id to edit is " + id);
    }

    return (
        
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.titleContainer}>
                    <Text style={styles.habitTitle}>
                        Your Habits
                    </Text>
                </View>
                {
                    state.map((item) => (
                        
                            
                        editHabitId === item.id ? 
                            <Card style={styles.habitCard} key={item.id}>
                                <View style={styles.habitItem}>
                                    <TextInput
                                        placeholder={item.habitName}
                                        placeholderTextColor={Colors.text.secondary}
                                        style={styles.habitInput}
                                        onChangeText={text => setAddText(text)}
                                        onSubmitEditing={() => {
                                            editHabit(item.id, addText);
                                            setEditHabitId(-1);
                                         }}
                                    />
                                </View>
                            </Card>
                            :
                            <Card style={styles.habitCard} key={item.id} onLongPress={() => setUpEditHabit(item.id)} >

                                <View style={styles.habitItem}>
                                    <Checkbox style={styles.habitCheckbox} color={Colors.text.primary} uncheckedColor={Colors.text.primary} status={item.checked ? 'checked' : 'unchecked'} onPress={() => markHabit(item.id, !item.checked)} />
                                  
                                    <Text style={styles.habitName}>{item.habitName}</Text>
                                    <Text style={styles.habitStreak}>{item.streak}{" day\nstreak!"}</Text>
                                    <MaterialIcons name="delete-forever" style={styles.removeHabit} size={30} onPress={() => deleteHabit(item.id)} />
                                </View>
                            </Card>
            
                        
                    
                    ))}
                    {
                        addHabitActivated ? <Card style={styles.habitCard} key="addHabit"><View style={styles.habitItem}><TextInput
                        placeholder="New habit"
                        placeholderTextColor={Colors.text.secondary}
                        style={styles.habitInput}
                        onChangeText={text => setAddText(text)}
                        onSubmitEditing={() => {
                            addHabit(addText);
                            setAddHabitActivated(false);}}
                    /></View></Card> : null
                        }

                    
                    <Text style={styles.inspirationalText}>{inspirationalInsight}</Text>  
                    <Button icon="chart-bar" color={Colors.habit} contentStyle={styles.statsButtonContent} style={styles.statsButton} labelStyle={styles.statsButtonText} mode="contained" onPress={() => navigation.navigate('HabitsStats')}>
                        See stats about your habits
                    </Button>  
            </ScrollView>
      </SafeAreaView>
    )
}


MainHabitsScreen.navigationOptions = ({ navigation }) => {
    let addFunct = navigation.getParam('addfunction');
    return {
        headerRight: () => (
            <FAB icon="plus" style={styles.addButton} color={Colors.text.darkPrimary} onPress={() => addFunct()} />  
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        color: Colors.text.primary,
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
        color: Colors.text.primary,
    },
    addButton: {
        margin: 16,
        padding: 8,
        position:'absolute',
        right:0,
        top:0,
        backgroundColor: Colors.habit,
        color: Colors.text.darkPrimary,
        borderRadius: 100,
        

    },

    habitCard: {
        marginTop: 10,
        marginHorizontal: 16,
        backgroundColor: Colors.surface,

    },

    habitItem: {
        color: Colors.text.primary,
        flex: 0,
        flexDirection: 'row',
        padding: 10,
        
    },

    habitCheckbox: {
        color: Colors.text.primary,
        backgroundColor: Colors.text.primary,
        flexGrow: 0, 
    },
    habitInput: {
        flexGrow: 1, 
        borderBottomColor: Colors.habit,
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        fontSize: 18,
        width: 220,
        height: 40,
        backgroundColor: Colors.dp02,
        color: Colors.text.primary,
    },
    habitName: {
        color: Colors.text.primary,
        flexGrow: 1, 
        fontSize: 18,
        width: 180,
        lineHeight: 36,

    },
    habitStreak: {
        color: Colors.text.primary,
        flexGrow: 0, 
        marginLeft: 15,
        width: 65,
    },

    removeHabit: {
        color: Colors.text.primary,
        flexGrow: 0, 
    },

    inspirationalText: {
        fontSize:36,
        textAlign: 'center',
        paddingVertical: 24,
        paddingHorizontal: 16,
        color: Colors.text.secondary,
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