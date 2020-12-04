import React, { useContext, useEffect } from 'react';
import { View, SafeAreaView, ScrollView , Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { Context } from '../../context/HabitsContext';
import { Card, List, Checkbox, Button, FAB, Icon,  } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; 
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const HabitsComplete = {
    'today': {
        labels: ["Today"], // optional
        data: [0.7],
    },
    'month': {
        labels: ["Month"], // optional
        data: [0.1],
    },
    'year': {
        labels: ["Year"], // optional
        data: [0.5],
    }
};

const HabitsHistory = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    datasets: [
        {
        data: [20, 40, 40, 50, 40, 50, 60, 70, 80, 40, 60, 70, 100, 90],
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
        strokeWidth: 2 // optional
        }
    ],
};

const progressData = [
    { date: "2020-09-07", count: 5},
    { date: "2020-09-14", count: 5},
    { date: "2020-09-21", count: 5},
    { date: "2020-09-28", count: 5},
    { date: "2020-10-05", count: 5},
    { date: "2020-10-12", count: 5},
    { date: "2020-10-19", count: 5},
    { date: "2020-10-26", count: 5},
    { date: "2020-11-02", count: 5},
    { date: "2020-11-09", count: 5},
    { date: "2020-11-16", count: 5},
    { date: "2020-11-23", count: 5},
    { date: "2020-11-30", count: 5},
    { date: "2020-09-01", count: 1},
    { date: "2020-09-08", count: 1},
    { date: "2020-09-15", count: 5},
    { date: "2020-09-22", count: 4},
    { date: "2020-09-29", count: 1},
    { date: "2020-10-06", count: 5},
    { date: "2020-10-13", count: 4},
    { date: "2020-10-20", count: 5},
    { date: "2020-10-27", count: 5},
    { date: "2020-11-03", count: 5},
    { date: "2020-11-10", count: 5},
    { date: "2020-11-17", count: 5},
    { date: "2020-11-24", count: 0},
    { date: "2020-12-01", count: 5},
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
    backgroundColor: '#ff0000',
    backgroundGradientFrom: "#ff0000",
    backgroundGradientTo: "#ff0000",
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: () => '#000000',
};

const MainHabitsScreen = ({ navigation }) => {
    
    return (
        
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.titleContainer}>
                    <Text style={styles.statTitle}>
                        Habits Completed
                    </Text>
                </View>
                <View style={styles.progressOverview}>
                <ProgressChart
                    data={HabitsComplete['today']}
                    width={screenWidth/3}
                    height={56}
                    strokeWidth={12}
                    radius={22}
                    chartConfig={chartConfig}
                    hideLegend={true}
                /> 
                <ProgressChart
                    data={HabitsComplete['month']}
                    width={screenWidth/3}
                    height={56}
                    strokeWidth={12}
                    radius={22}
                    chartConfig={chartConfig}
                    hideLegend={true}
                />
                <ProgressChart
                    data={HabitsComplete['year']}
                    width={screenWidth/3}
                    height={56}
                    strokeWidth={12}
                    radius={22}
                    chartConfig={chartConfig}
                    hideLegend={true}
                />
                </View>
                <View style={styles.progressOverview}>
                    <Text style={styles.progressOverviewLegend}>
                        Today: {HabitsComplete['today'].data[0]*100}%
                    </Text>
                    <Text style={styles.progressOverviewLegend}>
                        Month: {HabitsComplete['month'].data[0]*100}%
                    </Text>
                    <Text style={styles.progressOverviewLegend}>
                        Year: {HabitsComplete['year'].data[0]*100}%
                    </Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.statTitle}>
                        Habit History (past 14 days)
                    </Text>
                </View>
                <View>
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
                        Habit Progress (3 Months)
                    </Text>
                </View>
                <View style={styles.progressCalendar}>  
                    <ContributionGraph
                        values={progressData}
                        endDate={new Date()}
                        numDays={92}
                        width={screenWidth-85}
                        height={220}
                        chartConfig={chartConfig}
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
                <View style={styles.titleContainer}>
                    <Text style={styles.statTitle}>
                        Habit Streaks (in days)
                    </Text>
                </View>
                <View style={styles.progressCalendar}>  
                    <BarChart
                        data={habitStreak}
                        width={screenWidth}
                        height={220}
                        withCustomBarColorFromData={true}
                        flatColor={true}
                        chartConfig={
                            (function(){ // Current version of chart-kit is broken... Hack to get it to work
                                let temp = {};
                                Object.assign(temp, chartConfig, {data: habitStreak.datasets});
                                return temp;
                            })()
                        }
                    />

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
        marginVertical: 10,
        
    },
    statTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    progressOverview: {
        flex:0,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    progressOverviewLegend: {
        width: screenWidth/3,
        textAlign: 'center',

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
        height: 21,

    },   
})

export default MainHabitsScreen;