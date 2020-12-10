import React, { useContext, useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView , Text, StyleSheet, TextInput, Pressable  } from 'react-native';
import { Context } from '../../context/TasksContext';
import { Card, List, Checkbox, Button, FAB, Icon,  } from 'react-native-paper';
import EditTasks from './EditTasksScreen';
import { MaterialIcons } from '@expo/vector-icons'; 
import {Colors} from '../../components/DarkTheme';



let inspirationalInsight = "You completed 15 tasks this week! Great job!";


const MainTasksScreen = ({ navigation }) => {
    const { state, getTasks, addTasks, editTask, deleteTask, markTask } = useContext(Context);
    const [addTaskActivated, setAddTaskActivated] = useState(false);
    const [editTaskId, setEditTaskId] = useState(-1);
    const [addText, setAddText] = useState('');
    
    useEffect(() => {
        getTasks();

    }, [state]);

    useEffect(() => {
        navigation.setParams({addfunction: setUpAddTask});
    }, [])

    const setUpAddTask = () => {
        setAddTaskActivated(true);
    }

    const setUpEditTask = (id) => {
        setEditTaskId(id);
    }

    return (
        
        <SafeAreaView style={styles.container}>  
            <ScrollView style={styles.scrollView}>
                <View style={styles.titleContainer}>
                
                <Text style={styles.taskTitle}>
                    Your Tasks
                </Text>

                </View>
                
                    { 
                        state.map((item) => (
                            editTaskId === item.id ? 
                            <Card style={styles.taskCard} key={ item.taskName}>
                                <EditTasks taskId={item.id} initialName={item.taskName} editMode={true} callbackFunction={() => setEditTaskId(-1)}/>
                                </Card> :
                            <Card style={styles.taskCard} key={item.taskName} onLongPress={ () => setUpEditTask(item.id) }>
                                <View style={styles.taskItem}>
                                    <Checkbox style={styles.taskCheckbox} color={Colors.text.primary} uncheckedColor={Colors.text.primary} checked='unchecked' key={item.taskName} onPress={() => markTask(item.id)} />
                                   
                                    <Text style={styles.taskName}>{item.taskName}</Text>
                                    
                                    <View style={styles.taskDate}>
                                        <Text style={styles.taskDateText}>{item.dueDate}</Text>
                                    </View>
                                    <MaterialIcons name="delete-forever" style={styles.removeTask} size={30} onPress={() => deleteTask(item.id)} />

                                </View>
                            </Card>
                        ))
                    }
                    {
                        addTaskActivated ? 
                        <Card style={styles.taskCard} key="addTask">
                            <EditTasks taskId={-1} initialName="" editMode={false} callbackFunction={() => setAddTaskActivated(false)}/>
                        </Card> : null
                    }
                    <Text style={styles.inspirationalText}>{inspirationalInsight}</Text>  
                    <Button icon="chart-bar" color={Colors.task} contentStyle={styles.statsButtonContent} style={styles.statsButton} labelStyle={styles.statsButtonText} mode="contained" onPress={() => navigation.navigate('TasksStats')}>
                        See stats about your tasks
                    </Button>  
            </ScrollView>
      </SafeAreaView>
    )

}

MainTasksScreen.navigationOptions = ({ navigation }) => {
    let addFunct = navigation.getParam('addfunction');
    return {
        headerRight: () => (
            <FAB icon="plus" style={styles.addButton} color={Colors.text.primary} onPress={() => addFunct()} />  
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
    taskTitle: {
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
        backgroundColor: Colors.task,
        color: Colors.text.darkPrimary,
        borderRadius: 100,
        

    },
    removeTask: {
        flexGrow: 0, 
        color: Colors.text.primary,
    },

    taskCard: {
        marginVertical: 10,
        marginHorizontal: 16,
        backgroundColor: Colors.surface,
    },

    taskItem: {
        color: Colors.text.primary,
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignItems:"center",
        
    },

    taskCheckbox: {
        flexGrow: 0, 
        color: Colors.text.primary,
        backgroundColor: Colors.text.primary,
    },
    taskInput: {
        flexGrow: 1, 
        borderBottomColor: Colors.task,
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        fontSize: 18,
        width: 250,
        backgroundColor: Colors.dp02,
        color: Colors.text.primary,
    },
    taskName: {
        flexGrow: 1, 
        fontSize: 15,
        width: 160,
        lineHeight: 36,
        color: Colors.text.primary,
    },
    taskDate: {
        flexGrow: 0, 
        marginLeft: 5,
        fontSize: 8,
    },
    taskDateText: {
        color: Colors.text.primary,
    },
    inspirationalText: {
        fontSize:36,
        textAlign: 'center',
        paddingVertical: 24,
        paddingHorizontal: 16,
        color: Colors.text.primary,

    },
    statsButton: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    statsButtonContent: {
        height: 100,
    },    
})

export default MainTasksScreen;