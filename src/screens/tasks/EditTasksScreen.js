import React, { useContext, useEffect, useState } from 'react';
import { View, SafeAreaView , Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";



const EditTasksScreen = ({ navigation }) => {
    const [isPickerVisible, setPickerVisibility] = useState(false);

    const [mode, setMode] = useState("date")

    const showPicker = () => {
      setPickerVisibility(true);
    };
  
    const hidePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = () => {
      console.warn("Something changed");
      hidePicker();
    };

    return(
        <TouchableWithoutFeedback onPress={ () => {Keyboard.dismiss();}}>

            <SafeAreaView style={styles.container}>

                <Text style={styles.headline}>
                    Add your new task here:
                </Text>
                
                <View style={styles.tasksInputContainer}>
                    <TextInput style={styles.tasksInput} 
                        placeholder=" New task..."
                        multiline={true}/>
                </View>

                <TouchableOpacity style={styles.dateTimeButton} onPress={showPicker}>
                    <Text style={styles.dateTimeLabel}>
                        Choose Date
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.dateTimeButton} onPress={()=>{showPicker(); {setMode("time")}}}>
                    <Text style={styles.dateTimeLabel}>
                        Choose Time
                    </Text>
                </TouchableOpacity>

                <DateTimePickerModal
                    isVisible={isPickerVisible}
                    mode={mode}
                    onConfirm={handleConfirm}
                    onCancel={hidePicker}
                /> 

                <TouchableOpacity style={styles.doneButton} onPress={()=>console.log("New task created...")}>
                    <Text style={styles.doneLabel}>
                        DONE
                    </Text>
                </TouchableOpacity>

            </SafeAreaView>

        </TouchableWithoutFeedback>
        
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        backgroundColor: "#BCE3FF",
    },

    headline:{
        fontSize:33,
        fontWeight:"bold",
        marginTop:20,
        textAlign:"center",
        textAlignVertical:"center",
    },

    taskInput:{
        marginTop:20,
        fontSize:50,
    },

    tasksInputContainer:{
        marginTop:20,
        marginHorizontal:20,
        padding:5,
        justifyContent:"flex-start",
        height:120,
        borderWidth:1,
        backgroundColor:"#f0ffff",
        elevation:6,
    },

    dateTimeButton:{
        height:60,
        marginTop:50,
        marginHorizontal:50,
        justifyContent:"center",
        backgroundColor:"#f0f8ff",
        elevation:3,
    },

    dateTimeLabel:{
        fontSize:20,
        textAlign:"center",
    },


    doneButton:{
        height:90,
        marginTop:70,
        marginHorizontal:90,
        justifyContent:"center",
        backgroundColor:"#71B2E1",
        elevation:3,
    },

    doneLabel:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
    },

});

export default EditTasksScreen;