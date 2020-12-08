import React, { useContext, useEffect } from 'react';
import { View, SafeAreaView, ScrollView ,Image, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { Context } from '../../context/HabitsContext';
import { Card, List, Checkbox, FAB, Icon,  } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; 
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from 'react-native-chart-kit';

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;




const HabitsHistory = {
    color: 'white',
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    datasets: [
        {
        data: [5, 5, 3, 2, 2, 1, 3, 3, 4, 4, 4, 4, 5, 4],
        color: (opacity = 1) => `rgba(126, 77, 170, ${opacity})`, // optional
        strokeWidth: 10 // optional
        }
    ],
};

const progressData = [
    { date: "2020-09-07", count: 3},
    { date: "2020-09-08", count: 3},
    { date: "2020-09-09", count: 5},
    { date: "2020-09-10", count: 5},
    { date: "2020-09-11", count: 4},
    { date: "2020-09-12", count: 4},
    { date: "2020-09-13", count: 2},
    { date: "2020-09-14", count: 1},
    { date: "2020-09-15", count: 1},
    { date: "2020-09-16", count: 3},
    { date: "2020-09-17", count: 2},
    { date: "2020-09-18", count: 1},
    { date: "2020-09-19", count: 4},
    { date: "2020-09-20", count: 4},
    { date: "2020-09-21", count: 4},
    { date: "2020-09-22", count: 4},
    { date: "2020-09-23", count: 5},
    { date: "2020-09-24", count: 5},
    { date: "2020-09-25", count: 3},
    { date: "2020-09-26", count: 3},
    { date: "2020-09-27", count: 3},
    { date: "2020-09-28", count: 4},
    { date: "2020-09-29", count: 2},
    { date: "2020-09-30", count: 2},
    { date: "2020-09-31", count: 5},
    { date: "2020-10-01", count: 1},
    { date: "2020-10-02", count: 5},
    { date: "2020-10-03", count: 5},
    { date: "2020-10-04", count: 5},
    { date: "2020-10-05", count: 3},
    { date: "2020-10-06", count: 2},
    { date: "2020-10-07", count: 2},
    { date: "2020-10-08", count: 2},
    { date: "2020-10-09", count: 2},
    { date: "2020-10-10", count: 1},
    { date: "2020-10-11", count: 1},
    { date: "2020-10-12", count: 3},
    { date: "2020-10-13", count: 3},
    { date: "2020-10-14", count: 4},
    { date: "2020-10-15", count: 4},
    { date: "2020-10-16", count: 4},
    { date: "2020-10-17", count: 4},
    { date: "2020-10-18", count: 4},
    { date: "2020-10-19", count: 2},
    { date: "2020-10-20", count: 2},
    { date: "2020-10-21", count: 2},
    { date: "2020-10-22", count: 5},
    { date: "2020-10-23", count: 5},
    { date: "2020-10-24", count: 5},
    { date: "2020-10-25", count: 5},
    { date: "2020-10-26", count: 5},
    { date: "2020-10-27", count: 4},
    { date: "2020-10-28", count: 3},
    { date: "2020-10-29", count: 3},
    { date: "2020-10-30", count: 3},
    { date: "2020-11-01", count: 3},
    { date: "2020-11-02", count: 2},
    { date: "2020-11-03", count: 1},
    { date: "2020-11-04", count: 1},
    { date: "2020-11-05", count: 0},
    { date: "2020-11-06", count: 0},
    { date: "2020-11-07", count: 1},
    { date: "2020-11-08", count: 3},
    { date: "2020-11-09", count: 3},
    { date: "2020-11-10", count: 4},
    { date: "2020-11-11", count: 5},
    { date: "2020-11-12", count: 5},
    { date: "2020-11-13", count: 3},
    { date: "2020-11-14", count: 3},
    { date: "2020-11-15", count: 3},
    { date: "2020-11-16", count: 2},
    { date: "2020-11-17", count: 2},
    { date: "2020-11-18", count: 1},
    { date: "2020-11-19", count: 2},
    { date: "2020-11-20", count: 3},
    { date: "2020-11-21", count: 5},
    { date: "2020-11-22", count: 1},
    { date: "2020-11-23", count: 4},
    { date: "2020-11-24", count: 4},
    { date: "2020-11-25", count: 4},
    { date: "2020-11-26", count: 3},
    { date: "2020-11-27", count: 2},
    { date: "2020-11-28", count: 5},
    { date: "2020-11-29", count: 5},
    { date: "2020-11-30", count: 5},
    { date: "2020-11-31", count: 5},
    { date: "2020-12-01", count: 0},
    { date: "2020-12-02", count: 0},
    { date: "2020-12-03", count: 0},
    { date: "2020-12-04", count: 0},
    { date: "2020-12-05", count: 0},
    { date: "2020-12-06", count: 0},
    { date: "2020-12-07", count: 0},
    { date: "2020-12-08", count: 5},
    { date: "2020-12-09", count: 0},
    { date: "2020-12-10", count: 1},
    { date: "2020-12-11", count: 0},
    { date: "2020-12-12", count: 0},
    { date: "2020-12-13", count: 0},
    { date: "2020-12-14", count: 0},
];

const habitStreak = {
    labels: ["Meditate", "Run Trails", "Make Bed", "Journal", "Vitamins",],
    datasets: [
        {
        data: [45, 44, 28, 80, 99],
        }
    ]
};

const chartConfig = {
    backgroundColor: '#121212',
    backgroundGradientFrom: "#121212",
    backgroundGradientTo: "#121212",
    backgroundGradientFromOpacity: 1,
    backgroundGradientToOpacity: 2,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: () => '#FFFFFF',
};

const chartConfig2 = {
    backgroundColor: '#ff0000',
    backgroundGradientFrom: "#ff0000",
    backgroundGradientTo: "#ff0000",
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 183, 3, ${opacity})`,
    labelColor: () => '#FFFFFF',
};

const MoodStatsScreen = ({ navigation }) => {
    return (
        
            
             
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.titleContainer}>
                    <Text style={styles.statTitle}>
                        Top Moods
                    </Text>
                </View>
                <View style={styles.progressOverview}>
                    <ImageBackground 
                    style={styles.backroundStyles} 
                    source={require("./assests/circle.png")}>
                        <Image 
                                style={styles.buttonStyles} 
                                source={require("./assests/noun_dead_14700.png")}/>
                    </ImageBackground>
                    <ImageBackground 
                    style={styles.backroundStyles} 
                    source={require("./assests/green.png")}>
                        <Image 
                                style={styles.buttonStyles} 
                                source={require("./assests/noun_excited_14706.png")}/>
                    </ImageBackground>
                    <ImageBackground 
                    style={styles.backroundStyles} 
                    source={require("./assests/dark_blue.png")}>
                        <Image 
                                style={styles.buttonStyles} 
                                source={require("./assests/noun_Sad_14699.png")}/>
                    </ImageBackground>
                </View>
                
                <View style={styles.titleContainer}>
                    <Text style={styles.statTitle}>
                        Mood History (past 14 days)
                    </Text>
                </View>
                <View style={styles.titleContainer2}>
                    <LineChart
                        
                        data={HabitsHistory}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        hideLegend={true}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.statTitle}>
                        Moods Over Time (3 Months)
                    </Text>
                </View>
                <View style={styles.progressCalendar}>  
                    <ContributionGraph
                        values={progressData}
                        endDate={new Date()}
                        numDays={92}
                        width={screenWidth-85}
                        height={220}
                        chartConfig={chartConfig2}
                        showOutOfRangeDays={true}
                    />
                    <View style={styles.progressCalLabels}>
                        <Text style={styles.progressCalDay}>Monday</Text>
                        <Text style={styles.progressCalDay}>Tuesday</Text>
                        <Text style={styles.progressCalDay}>Wednesday</Text>
                        <Text style={styles.progressCalDay}>Thursay</Text>
                        <Text style={styles.progressCalDay}>Friday</Text>
                        <Text style={styles.progressCalDay}>Saturday</Text>
                        <Text style={styles.progressCalDay}>Sunday</Text>
                    </View>
                </View>
                <View style={styles.flexBox3}>
                <Button 
                    title="Return to Main screen"
                    backgroundColor=''
                    onPress={() => navigation.navigate('Home')}                 
                />
                </View>
                <View style ={{ justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.textStyles2}>Icons created by Austin Condiff from Noun Project</Text>
                </View>
                               

            </ScrollView>
      </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    flexBox3: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        justifyContent: 'space-around',
        padding: 10,      
        
    },
    textStyles2: {        
        color: 'white',        
        fontSize: 12
    }, 
    
    backroundStyles: {        
        width: 75,
        height: 75,               
    },
    
    container: {
        backgroundColor: '#121212',
        flex: 1,
    },
    scrollView: {
        flex: 1,
        marginTop:8,
    },
    buttonStyles: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: 75,
        height: 75,        
    },
    titleContainer: {
        color: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 10,        
    },
    
    statTitle: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    progressOverview: {
        flex:0,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    
    progressCalendar: {
        flex:0,
        flexDirection: 'row',

    },
    progressCalLabels : {
        marginTop: 50,
        paddingLeft: 5
    },
    progressCalDay : {
        color: 'white',
        height: 21,

    },  
});

export default MoodStatsScreen;