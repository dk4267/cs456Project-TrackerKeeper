import { AsyncStorage } from 'react-native';
import createCustomContext from './createCustomContext';

const idCounter = 1;

const habitsReducer = (state, action) => {
    switch (action.type) {
        case 'get_habits':
            return action.payload;
        default: 
            return state;
    }
}

const setHabits = () => async() => {
    try {
        const result = await AsyncStorage.getItem('HABITS');
        if (result === null) {
            await AsyncStorage.setItem('HABITS', JSON.stringify([]));
            console.log('habits array initiated');
        }
    } catch (err) {
        console.log('error initiating habits');
    }
}

const getHabits = (dispatch) => async () => {
    try {
        const result = await AsyncStorage.getItem('HABITS');
        dispatch({ type: 'get_habits', payload: result});
        console.log(result);
    } catch {
        console.log('error fetching habits')
    }
    //get habits from async storage
    //dispatch to reducer
}

const deleteHabit = (dispatch) => async (id) => {
    //delete habit from async storage
    //dispatch to reducer with payload id
}

const editHabit = (dispatch) => async (id, habitName, daysOfWeek, callback) => {
    //edit habit in async storage
    //dispatch to reducer with payload id, habitname, daysofweek
    //if callback to navigate back, call callback funct
}

const addHabit = (dispatch) => async (habitName, daysOfWeek) => {
    const habitData = { id: idCounter + 1, habitName: habitName, daysOfWeek: daysOfWeek };
    idCounter += 1;
    //add to async storage
    //dispatch to reducer with payload habitname, daysofweek, empty arr for dates, and generate an id (how?)
    //if callback, callback()
}

const markHabit = (dispatch) => async (habitName, date) => {
    //edit habit in async storage to update date
    //dispatch to reducer dates, habitname, id, daysofweek
}

export const { Provider, Context } = createCustomContext(habitsReducer, { setHabits, getHabits }, []);