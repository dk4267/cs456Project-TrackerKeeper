import { AsyncStorage } from 'react-native';
import createCustomContext from './createCustomContext';

let idCounter = 1;

const habitsReducer = (state, action) => {
    switch (action.type) {
        case 'get_habits':
            return action.payload;
        default: 
            return state;
    }
}


const getHabits = (dispatch) => async () => {
    try {
        const result = await AsyncStorage.getItem('HABITS');
        if (result === null) {
            dispatch({ type: 'get_habits', payload: []})
        } else {
        dispatch({ type: 'get_habits', payload: result});
        console.log(result);
        }
    } catch {
        console.log('error fetching habits')
    }

}

const deleteHabit = (dispatch) => async (id) => {
    //delete habit from async storage
    //dispatch to reducer with payload id
}

const editHabit = (dispatch) => async (id, habitName, callback) => {
    //edit habit in async storage
    //dispatch to reducer with payload id, habitname, daysofweek
    //if callback to navigate back, call callback funct
}

const addHabit = (dispatch) => async (habitName) => {
    await AsyncStorage.removeItem('HABITS');
    const habitData = { id: idCounter, habitName: habitName, dateAdded: new Date(), checked: false, dates: [], streak: 0 };
    idCounter += 1;
    let habitsArray = [];
    try {
        let storedHabits = await AsyncStorage.getItem('HABITS');
        if (storedHabits !== null) {
            habitsArray = JSON.parse(storedHabits);
        }
        await AsyncStorage.removeItem('HABITS');
        habitsArray.push(habitData);
        await AsyncStorage.setItem('HABITS', JSON.stringify(habitsArray));
        const result = await AsyncStorage.getItem('HABITS');
        console.log(result);
    } catch (err) {

    }
    //add to async storage
    //dispatch to reducer with payload habitname, daysofweek, empty arr for dates, and generate an id (how?)
    //if callback, callback()
}

const markHabit = (dispatch) => async (habitName, date) => {
    //edit habit in async storage to update date
    //dispatch to reducer dates, habitname, id, daysofweek
}

export const { Provider, Context } = createCustomContext(habitsReducer, { getHabits, addHabit }, []);