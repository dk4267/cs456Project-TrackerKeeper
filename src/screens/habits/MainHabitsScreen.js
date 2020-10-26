import React from 'react';
import { View, SafeAreaView, ScrollView , Text, StyleSheet, TextInput, Pressable  } from 'react-native';

import { Card, List, Checkbox, Button, FAB, Icon,  } from 'react-native-paper';

let habits = [
    {
        checked: true,
        name: 'Meditate',
        streak: 301
    },
    {
        checked: false,
        name: 'Run the trails',
        streak: 50
    },
    {
        checked: true,
        name: 'Make my bed',
        streak: 67
    },
    {
        checked: false,
        name: 'Write in my journal',
        streak: 23
    },
    {
        checked: false,
        name: '',
        streak: 0
    },
]

let inspirationalInsight = "You completed 72% of your habits this week! Keep it up!";

const HabitCheckbox = (prop) => {
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

const MainHabitsScreen = ({ navigation }) => {
    return (
        
        <SafeAreaView style={styles.container}>
        <FAB icon="plus" style={styles.addButton} onPress={() => console.log('Add Pressed')} />    
            <ScrollView style={styles.scrollView}>
                <View style={styles.titleContainer}>
                <Text style={styles.habitTitle}>
                    Your Habits
                
                    
                </Text>
                

                </View>
                
                    { 
                        habits.map((item, key) => (
                            <Card style={styles.habitCard} key={key}>
                                <View style={styles.habitItem}>
                                    <HabitCheckbox style={styles.habitCheckbox} checked={item.checked} key={key} />
                                    {(item.name ? 
                                    <Text style={styles.habitName}>{item.name}</Text>:
                                    <TextInput
                                        placeholder="New habit"
                                        style={styles.habitInput}
                                    />)}
                                    <Text style={styles.habitStreak}>{item.streak}{" day\nstreak!"}</Text>
                                </View>
                            </Card>
                        ))
                    }
                    <Text style={styles.inspirationalText}>{inspirationalInsight}</Text>  
                    <Button icon="chart-bar" contentStyle={styles.statsButtonContent} style={styles.statsButton} labelStyle={styles.statsButtonText} mode="contained" onPress={() => console.log('Stats Pressed')}>
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
        width: 250,
        backgroundColor: '#F0F0F0'
    },
    habitName: {
        flexGrow: 1, 
        fontSize: 18,
        width: 250,
        lineHeight: 36,

    },
    habitStreak: {
        flexGrow: 0, 
        marginLeft: 15,
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