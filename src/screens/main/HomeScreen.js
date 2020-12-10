import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Goals from '../../components/Goals';
import {Colors} from '../../components/DarkTheme';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.mainStyles}>
            <TouchableOpacity style={styles.circleOne} onPress={() => navigation.navigate("MainMood")}>
                <Image style={styles.circleStyles} source={require('./assets/moodcircle.png')}/>
                <Text style={styles.textStyles} >Mood</Text>
            </TouchableOpacity>
            <View style={styles.groupTwo}>
                <TouchableOpacity style={styles.circleTwo} onPress={() => navigation.navigate('MainHabits')}>
                    <Image style={styles.circleStyles} source={require('./assets/habitscircle.png')}/>
                    <Text style={styles.textStyles} >Habits</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleThree} onPress={() => navigation.navigate('MainTasks')}>
                    <Image style={styles.circleStyles} source={require('./assets/taskscircle.png')}/>
                    <Text style={styles.textStyles} >Tasks</Text>
                </TouchableOpacity>
            </View>
            <Goals nav={navigation}/>
            <View style={styles.creatorsContainer}>
                <Text style={styles.creatorsText}>Created by</Text>
                <Text style={styles.creatorsText}>
                    Debbie Kirchner,
                    Scott Howard,
                    Chris Munns,
                    Long Dang
                </Text>
            </View>
        </View>
    )
}

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Calendar")} >
                <Image style={styles.navIcon} source={require('./assets/AnalyticsLink.png')} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 15,
        color: Colors.text.primary,
    },
    circleStyles: {
        height: 100,
        width: 100
    },
    mainStyles: {
        backgroundColor: Colors.background,
        flex: 1
    },
    circleOne: {
        alignItems: "center",
        marginTop: 50,
        marginBottom: 25
    },
    groupTwo: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    circleTwo: {
        alignItems: "center",
        marginLeft: 50
    },
    circleThree: {
        alignItems: "center",
        marginRight: 50
    },
    navIcon: {
        height: 30,
        width: 30,
        marginRight: 15
    },
    creatorsContainer:{
        marginTop: 'auto',
        padding: 15,
        alignItems: "center",
        textAlign: 'center',
    },
    creatorsText: {
        color: Colors.text.secondary,
        textAlign: 'center',
    }

});

export default HomeScreen;