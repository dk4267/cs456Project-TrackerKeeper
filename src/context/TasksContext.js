import { AsyncStorage } from 'react-native';
import createCustomContext from './createCustomContext';

let idCounter = 1;

const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'get_tasks':
            return action.payload;
        default: 
            return state;
    }
}


const getTasks = (dispatch) => async () => {
    try {
        const result = await AsyncStorage.getItem('TASKS');
        if (result === null) {
            dispatch({ type: 'get_tasks', payload: []})
        } else {
        dispatch({ type: 'get_tasks', payload: result});
        console.log(result);
        }
    } catch {
        console.log('error fetching tasks')
    }

}

const deleteTasks = (dispatch) => async (id) => {
    //delete tasks from async storage
    //dispatch to reducer with payload id
}

const editTasks = (dispatch) => async (id, tasksName, callback) => {
    //edit tasks in async storage
    //dispatch to reducer with payload id, tasksname, daysofweek
    //if callback to navigate back, call callback funct
}

const addTasks = (dispatch) => async (tasksName) => {
    await AsyncStorage.removeItem('TASKS');
    const tasksData = { id: idCounter, tasksName: tasksName, dateAdded: new Date(), checked: false, dates: [], date: ''};
    idCounter += 1;
    let tasksArray = [];
    try {
        let storedTasks = await AsyncStorage.getItem('TASKS');
        if (storedTasks !== null) {
            tasksArray = JSON.parse(storedTasks);
        }
        await AsyncStorage.removeItem('TASKS');
        tasksArray.push(tasksData);
        await AsyncStorage.setItem('TASKS', JSON.stringify(tasksArray));
        const result = await AsyncStorage.getItem('TASKS');
        console.log(result);
    } catch (err) {

    }
    //add to async storage
    //dispatch to reducer with payload tasksname, daysofweek, empty arr for dates, and generate an id (how?)
    //if callback, callback()
}

const markTasks = (dispatch) => async (tasksName, date) => {
    //edit tasks in async storage to update date
    //dispatch to reducer dates, tasksname, id, daysofweek
}

export const { Provider, Context } = createCustomContext(tasksReducer, { getTasks, addTasks }, []);