import React, { useContext, useEffect } from 'react';
import { View, SafeAreaView, ScrollView , Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { Context } from '../../context/HabitsContext';
import { Card, List, Checkbox, Button, FAB, Icon, } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; 
import {Colors} from '../../components/DarkTheme';

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

function hexToRgb(str) {
    var n = parseInt(str.replace(/^#([\da-f])([\da-f])([\da-f])$/i,
        '#$1$1$2$2$3$3').substring(1), 16);

    return [
        (n & 0xFF0000) >> 16,
        (n & 0xFF00) >> 8,
        n & 0xFF
    ]
}

let chartColor = hexToRgb(Colors.habit);

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
        color: (opacity = 1) => `rgba(${chartColor[0]}, ${chartColor[1]}, ${chartColor[2]}, ${opacity})`, // optional
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
        color: (opacity = 1) => `rgba(${chartColor[0]}, ${chartColor[1]}, ${chartColor[2]}, ${opacity})`, // optional
        strokeWidth: 10, // optional
        fillShadowGradient: Colors.habit,
        fillShadowGradientOpacity: 1,
        }
    ]
};



const chartConfig = {
    backgroundColor: Colors.habit,
    backgroundGradientFrom: Colors.habit,
    backgroundGradientTo: Colors.habit,
    fillShadowGradient: Colors.habit,
    fillShadowGradientOpacity: 1,
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(${chartColor[0]}, ${chartColor[1]}, ${chartColor[2]}, ${opacity})`,
    labelColor: () => Colors.text.primary,
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
                        withCustomBarColorFromData={false}
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
        backgroundColor: Colors.background,
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
        color: Colors.text.primary,
    },
    statTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.text.primary,
    },
    progressOverview: {
        flex:0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        

    },
    progressOverviewLegend: {
        width: screenWidth/3,
        textAlign: 'center',
        color: Colors.text.primary,
    },
    progressCalendar: {
        flex:0,
        flexDirection: 'row',

    },
    progressCalLabels : {
        marginTop: 50,
        paddingLeft: 5,
        color: Colors.text.primary,
    },
    progressCalDay : {
        height: 21,
        color: Colors.text.primary,
    },   
})

export default MainHabitsScreen;