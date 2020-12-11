import React, { useContext, useEffect, useState } from 'react';
import { View, SafeAreaView , Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Context } from '../../context/TasksContext';
import {Colors} from '../../components/DarkTheme';



const EditTasks = ({ initialName, taskId, editMode, callbackFunction }) => {
    const [isPickerVisible, setPickerVisibility] = useState(false);
    const [mode, setMode] = useState("date");
    const [date, setDate] = useState("");
    const [addText, setAddText] = useState('');
    const { addTasks, editTask } = useContext(Context);


    const showPicker = () => {
      setPickerVisibility(true);
    };
  
    const hidePicker = () => {
      setPickerVisibility(false);
    };
  
    const handleConfirm = (userValue) => {
      if (mode === "date") {
          setDate(userValue);
      }
      else {
          setTime(userValue);
      }
      hidePicker();
    };

    return(

            <View style={styles.taskItem}>
                
                    <TextInput style={styles.taskInput} 
                        placeholderTextColor={Colors.text.secondary}
                        placeholder={initialName === '' ? "New Task..." : initialName}
                        onChangeText={text => setAddText(text)}
                        />
                <View style={styles.pickerContainer}>
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
                    onConfirm={userValue => handleConfirm(userValue)}
                    onCancel={hidePicker}
                /> 

                <TouchableOpacity style={styles.doneButton} onPress={()=> {
                    if (date === '' ) {
                        setDate(new Date())

                    }
                    if (editMode) {
                        
                        editTask(taskId, addText, date);
                        callbackFunction();
                    }
                    else {
                       
                        addTasks(addText, date);
                        callbackFunction();
                    }
                }}>
                    <Text style={styles.doneLabel}>
                        Save
                    </Text>
                </TouchableOpacity>
                </View>

            </View>
        
    )

}

const styles = StyleSheet.create({
    taskItem: {

        flex: 1,
        padding: 10,
        alignItems:"center",
        
    },

    headline:{
        fontSize:33,
        fontWeight:"bold",
        marginTop:20,
        textAlign:"center",
        textAlignVertical:"center",
    },

    taskInput: {
        flexGrow: 1, 
        borderBottomColor: Colors.task,
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        fontSize: 18,
        width: 250,
        backgroundColor: Colors.dp02,
        color: Colors.text.primary,
    },

    tasksInputContainer:{
        marginTop:20,
        marginHorizontal:20,
        padding:5,
        justifyContent:"flex-start",
        borderWidth:1,
        backgroundColor:"#f0ffff",
        elevation:6,
    },

    pickerContainer: {
        flexDirection: 'row'
    },

    dateTimeButton:{
        height:30,
        marginTop:10,
        marginHorizontal:10,
        justifyContent:"center",
        elevation:3,
        backgroundColor: Colors.task,
    },

    dateTimeLabel:{
        fontSize:14,
        textAlign:"center",
        paddingHorizontal: 5,
        color: Colors.text.primary,
    },


    doneButton:{
        height:30,
        marginTop:10,
        marginHorizontal:10,
        justifyContent:"center",
        backgroundColor: Colors.task,
        elevation:3,
    },

    doneLabel:{
        fontSize:20,
        textAlign:"center",
        paddingHorizontal: 5,
        color: Colors.text.primary,
    },

});

export default EditTasks;