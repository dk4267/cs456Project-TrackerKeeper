import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, Button, Image, TouchableOpacity, Platform, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Context as GoalsContext } from '../../context/GoalsContext';
import {Colors} from '../../components/DarkTheme';

const EditGoalsScreen = ({ navigation }) => {

    const { state, editGoals } = useContext(GoalsContext);

    const [goalOne, setGoalOne] = useState(state[0]);
    const [goalTwo, setGoalTwo] = useState(state[1]);
    const [goalThree, setGoalThree] = useState(state[2]);


    return (
        <KeyboardAvoidingView style={styles.mainStyles} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.innerView}>
                    <Text style={styles.textStyles}>If you could choose only three goals to pursue, what would they be?</Text>
                    <Text style={styles.textStyles}>Write up to three long-term goals here, so you can remember what you are striving for every day!</Text>
                    <Text style={styles.textStyles} >Goal #1:</Text>
                    <TextInput style={styles.inputStyles} value={goalOne} multiline={true} maxLength={80} onChangeText={(text) => setGoalOne(text)}/>
                    <Text style={styles.textStyles}>Goal #2:</Text>
                    <TextInput style={styles.inputStyles} value={goalTwo} multiline={true} maxLength={80} onChangeText={(text) => setGoalTwo(text)}/>
                    <Text style={styles.textStyles}>Goal #3:</Text>
                    <TextInput style={styles.inputStyles} value={goalThree} multiline={true} maxLength={80} onChangeText={(text) => setGoalThree(text)}/>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => editGoals(goalOne, goalTwo, goalThree, () => navigation.pop())}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

EditGoalsScreen.navigationOptions = ({ navigation }) => {
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
        fontSize: 20,
        marginHorizontal: 15,
        marginVertical: 5,
        textAlign: "center",
        color: Colors.text.primary,
    },
    mainStyles: {     
        backgroundColor: Colors.background,
        flex: 1     
    },
    outerContainer: {
        alignItems: "center",        
    },
    inputStyles: {
        backgroundColor: Colors.dp02,
        color: Colors.text.primary,
        fontSize: 18,
        borderBottomColor: Colors.goal,
        borderBottomWidth: 1,
        marginBottom: 15,
        padding: 5,
        margin: 5,
        marginHorizontal: 15,
        width: "95%"
    },
    buttonStyles: {
        height: 45,
        width: 60,
        padding: 10, 
        backgroundColor: Colors.goal,
        alignSelf: "center"
    },
    navIcon: {
        height: 30,
        width: 30,
        marginRight: 15
    },
    buttonText: {
        color: Colors.text.primary,
        fontSize: 18
    },
    innerView: {
        justifyContent: "flex-end"
    }

});

export default EditGoalsScreen;