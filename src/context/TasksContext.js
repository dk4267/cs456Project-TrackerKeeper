import { AsyncStorage } from 'react-native';
import createCustomContext from './createCustomContext';

const formatDate = (initialDate) => {
    const outputTime = initialDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const outputDate = initialDate.toLocaleDateString('en-US');
    return `Due ${outputDate}\n${outputTime}`
}


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
        console.log("got a result: " + result);
        if (result === null) {
            dispatch({ type: 'get_tasks', payload: []})
        } else {
        dispatch({ type: 'get_tasks', payload: JSON.parse(result)});
        console.log("result: " + result);
        }
    } catch {
        console.log('error fetching tasks')
    }

}

const deleteTask = (dispatch) => async (id) => {
    let tasksArray = [];
    try {
        let storedTasks = await AsyncStorage.getItem('TASKS');
        if (storedTasks !== null) {
            tasksArray = JSON.parse(storedTasks);
        }

        let targetTasks = tasksArray.filter(item => item.id !== id);
        await AsyncStorage.removeItem('TASKS');
        await AsyncStorage.setItem('TASKS', JSON.stringify(targetTasks));

    } catch (err) {
        console.log(err);
    }
}

const editTask = (dispatch) => async (id, newTaskName, duedate) => {
    let tasksArray = [];
    try {
        let storedTasks = await AsyncStorage.getItem('TASKS');
        if (storedTasks !== null) {
            tasksArray = JSON.parse(storedTasks);
        }

        let targetTask = tasksArray.filter(item => item.id === id);
        let otherTasks = tasksArray.filter(item => item.id !== id);

        await AsyncStorage.removeItem('TASKS');
        targetTask[0].taskName = newTaskName;
        targetTask[0].dueDate = formatDate(dueDate);

        otherTasks.push(targetTask[0]);
        await AsyncStorage.setItem('TASKS', JSON.stringify(otherTasks));

    }
    catch (err) {
        console.log(err);
    }
}

const addTasks = (dispatch) => async (tasksName, duedate) => {
    let idNumber;
    let tasksArray = [];
    try {
        let storedTasks = await AsyncStorage.getItem('TASKS');
        if (storedTasks !== null) {
            tasksArray = JSON.parse(storedTasks);
        }

        let taskId = await AsyncStorage.getItem('TASK_ID');
        if (taskId !== null) {
            let Id = JSON.parse(taskId);
            idNumber = Id[0] + 1;
        }
        else {
            idNumber = 1;
        }
        const tasksData = { id: idNumber, taskName: tasksName, dateAdded: new Date(), checked: false, dueDate: formatDate(duedate)};
        await AsyncStorage.removeItem('TASK_ID');
        await AsyncStorage.removeItem('TASKS');
        tasksArray.push(tasksData);
        await AsyncStorage.setItem('TASK_ID', JSON.stringify([idNumber]));
        await AsyncStorage.setItem('TASKS', JSON.stringify(tasksArray));
        const result = await AsyncStorage.getItem('TASKS');
        console.log(result);
    } catch (err) {
        console.log(err);
    }
    //add to async storage
    //dispatch to reducer with payload tasksname, daysofweek, empty arr for dates, and generate an id (how?)
    //if callback, callback()
}

const markTask = (dispatch) => async (id, date) => {
    let tasksArray = [];
    let totalTasks= [];
    let succTasks = [];
    try {
        let storedTasks = await AsyncStorage.getItem('TASKS');
        let allTasks = await AsyncStorage.getItem('TOTAL_TASKS');
        let completedTasks = await AsyncStorage.getItem('COMPLETED_TASKS');

        if (storedTasks !== null) {
            tasksArray = JSON.parse(storedTasks);
        }

        let targetTask = tasksArray.filter(item => item.id === id);

        if (allTasks !== null) {
            totalTasks = allTasks;           
        } 
        totalTasks.push(targetTask);
        
        if (completedTasks !== null) {
            succTasks = completedTasks;
        }
            
        if (date <= targetTask.dueDate) {
                succTasks.push(targetTask);           
        }
        let otherTasks = tasksArray.filter(item => item.id !== id);
        await AsyncStorage.removeItem('TOTAL_TASKS');
        await AsyncStorage.removeItem('COMPLETED_TASKS');
        await AsyncStorage.removeItem('TASKS');
        await AsyncStorage.setItem('TOTAL_TASKS', JSON.stringify(totalTasks));
        await AsyncStorage.setItem('COMPLETED_TASKS', JSON.stringify(succTasks));
        await AsyncStorage.setItem('TASKS', JSON.stringify(otherTasks));

    } catch(err) {
        console.log(err);
    }

}

export const { Provider, Context } = createCustomContext(tasksReducer, { getTasks, addTasks, editTask, deleteTask, markTask }, []);