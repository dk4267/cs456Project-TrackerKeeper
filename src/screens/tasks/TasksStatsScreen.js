import React, { useContext, useEffect } from 'react';
import { View, SafeAreaView, ScrollView , Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { Context } from '../../context/TasksContext';
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

let chartColor = hexToRgb(Colors.task);

const TasksComplete = {
    'today': {
        labels: ["Today"], // optional
        data: [Math.floor(Math.random() * (40 - 100) + 100)/100],
    },
    'month': {
        labels: ["Month"], // optional
        data: [Math.floor(Math.random() * (40 - 100) + 100)/100],
    },
    'year': {
        labels: ["Year"], // optional
        data: [Math.floor(Math.random() * (40 - 100) + 100)/100],
    }
};

const TasksHistory = {
    labels: Array.from({length: 14}, (_, i) => i + 1),
    datasets: [
        {
        data: Array.from({length: 14}, (_, i) => Math.floor(Math.random() * (60 - 100) + 100)/100),
        color: (opacity = 1) => `rgba(${chartColor[0]}, ${chartColor[1]}, ${chartColor[2]}, ${opacity})`, // optional
        strokeWidth: 2 // optional
        }
    ],
};

const progressData = Array.from({length: 92}, function(_, i) {
    let tmpDate = new Date()
    tmpDate.setDate(tmpDate.getDate() - i);
    return {date: tmpDate.toISOString(), count: Math.floor(Math.random() * (1 - 6) + 6)};
});


const chartConfig = {
    backgroundColor: Colors.task,
    backgroundGradientFrom: Colors.task,
    backgroundGradientTo: Colors.task,
    fillShadowGradient: Colors.task,
    fillShadowGradientOpacity: 1,
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(${chartColor[0]}, ${chartColor[1]}, ${chartColor[2]}, ${opacity})`,
    labelColor: () => Colors.text.primary,
};

const MainTasksScreen = ({ navigation }) => {
    
    return (
        
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.titleContainer}>
                    <Text style={styles.statTitle}>
                        Tasks Completed
                    </Text>
                </View>
                <View style={styles.progressOverview}>
                <ProgressChart
                    data={TasksComplete['today']}
                    width={screenWidth/3}
                    height={56}
                    strokeWidth={12}
                    radius={22}
                    chartConfig={chartConfig}
                    hideLegend={true}
                /> 
                <ProgressChart
                    data={TasksComplete['month']}
                    width={screenWidth/3}
                    height={56}
                    strokeWidth={12}
                    radius={22}
                    chartConfig={chartConfig}
                    hideLegend={true}
                />
                <ProgressChart
                    data={TasksComplete['year']}
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
                        Today: {TasksComplete['today'].data[0]*100}%
                    </Text>
                    <Text style={styles.progressOverviewLegend}>
                        Month: {TasksComplete['month'].data[0]*100}%
                    </Text>
                    <Text style={styles.progressOverviewLegend}>
                        Year: {TasksComplete['year'].data[0]*100}%
                    </Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.statTitle}>
                        Task History (past 14 days)
                    </Text>
                </View>
                <View>
                    <LineChart
                        data={TasksHistory}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        hideLegend={true}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.statTitle}>
                        Task Progress (3 Months)
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

export default MainTasksScreen;