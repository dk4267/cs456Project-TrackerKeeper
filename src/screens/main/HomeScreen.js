import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import Goals from '../../components/Goals';

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
        </View>
    )
}

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerStyle: {
            backgroundColor: '#71B2E1'
        },
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Calendar")} >
                <Image style={styles.navIcon} source={require('./assets/AnalyticsLink.png')} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 15
    },
    circleStyles: {
        height: 100,
        width: 100
    },
    mainStyles: {
        backgroundColor: '#BCE3FF',
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
    }

});

export default HomeScreen;