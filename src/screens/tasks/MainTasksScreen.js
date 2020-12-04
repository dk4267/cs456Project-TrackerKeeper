import React, { useContext, useEffect } from 'react';
import { View, SafeAreaView, ScrollView , Text, StyleSheet, TextInput, Pressable  } from 'react-native';
import { Context } from '../../context/TasksContext';
import { Card, List, Checkbox, Button, FAB, Icon,  } from 'react-native-paper';

let tasks = [
    {
        checked: false,
        name: 'Finish math homework',
        date: 'Today \n at 12:00 pm'
    },
    {
        checked: true,
        name: 'Pick up medicine',
        date: 'Tommorow \n at 10:00 am'
    },
    {
        checked: true,
        name: 'Study physics',
        date: '10/16/2020 \n at 7:30pm'
    },
    {
        checked: false,
        name: '',
        date:''
    },
    {
        checked: false,
        name: '',
        date: ''
    },
]

let inspirationalInsight = "You completed 15 tasks this week! Great job!";

const TasksCheckbox = (prop) => {
    const [checked, setChecked] = React.useState(prop.checked);
  
    return (
        <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
                setChecked(!checked);
            }}
        />
    );
};

const MainTasksScreen = ({ navigation }) => {
    const { state, getTasks, addTasks } = useContext(Context);
    
    useEffect(() => {
        getTasks();
        const listener = navigation.addListener('didFocus', () => {
            getTasks();
        });

        return () => {
            listener.remove();
        }
    }, [])

    return (
        
        <SafeAreaView style={styles.container}>
        <FAB icon="plus" style={styles.addButton} onPress={() => navigation.navigate('EditTasks')} />    
            <ScrollView style={styles.scrollView}>
                <View style={styles.titleContainer}>
                
                <Text style={styles.taskTitle}>
                    Your Tasks
                </Text>

                </View>
                
                    { 
                        tasks.map((item, key) => (
                            <Card style={styles.taskCard} key={key}>
                                <View style={styles.taskItem}>
                                    <TasksCheckbox style={styles.taskCheckbox} checked={item.checked} key={key} />
                                    {(item.name ? 
                                    <Text style={styles.taskName}>{item.name}</Text>:
                                    <TextInput
                                        placeholder="New tasks"
                                        style={styles.tasksInput}
                                    />)}
                                    <View style={styles.taskDate}>
                                        <Text>{item.date}</Text>
                                    </View>

                                </View>
                            </Card>
                        ))
                    }
                    <Text style={styles.inspirationalText}>{inspirationalInsight}</Text>  
                    <Button icon="chart-bar" contentStyle={styles.statsButtonContent} style={styles.statsButton} labelStyle={styles.statsButtonText} mode="contained" onPress={() => console.log('Stats Pressed')}>
                        See stats about your tasks
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
    taskTitle: {
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

    taskCard: {
        marginTop: 10,
        marginHorizontal: 16,

    },

    taskItem: {

        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignItems:"center",
        
    },

    taskCheckbox: {
        flexGrow: 0, 
    },
    taskInput: {
        flexGrow: 1, 
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        fontSize: 18,
        width: 250,
        backgroundColor: '#F0F0F0'
    },
    taskName: {
        flexGrow: 1, 
        fontSize: 15,
        width: 180,
        lineHeight: 36,

    },
    taskDate: {
        flexGrow: 0, 
        marginLeft: 5,
        fontSize: 8,
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

export default MainTasksScreen;