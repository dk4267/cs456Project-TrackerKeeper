import { AsyncStorage } from 'react-native';
import createCustomContext from './createCustomContext';


const habitsReducer = (state, action) => {
    switch (action.type) {
        case 'get_habits':
        case 'add_habit':
        case 'edit_habit':
        case 'mark_habit':
            console.log("payload: " + action.payload);
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
        dispatch({ type: 'get_habits', payload: JSON.parse(result)});
        console.log(result);
        }
    } catch {
        console.log('error fetching habits')
    }

}

const deleteHabit = (dispatch) => async (id) => {
    //delete habit from async storage
    //dispatch to reducer with payload id
    let habitsArray = [];
    try {
        let storedHabits = await AsyncStorage.getItem('HABITS');
        if (storedHabits !== null) {
            habitsArray = JSON.parse(storedHabits);
        }
        
        let targetHabits = habitsArray.filter(item => item.id !== id);
        await AsyncStorage.removeItem('HABITS');
        await AsyncStorage.setItem('HABITS', JSON.stringify(targetHabits));
    }
    catch (err) {
        console.log(err);
    }
}

const editHabit = (dispatch) => async (id, newHabitName) => {
    //edit habit in async storage
    //dispatch to reducer with payload id, habitname, daysofweek
    //if callback to navigate back, call callback funct
    let habitsArray = [];
    try {
        let storedHabits = await AsyncStorage.getItem('HABITS');
        if (storedHabits !== null) {
            habitsArray = JSON.parse(storedHabits);
        }
       
        let targetHabit = habitsArray.filter(item => item.id === id);
        let otherHabits = habitsArray.filter(item => item.id !== id);

        await AsyncStorage.removeItem('HABITS');
        targetHabit[0].habitName = newHabitName;

        otherHabits.push(targetHabit[0]);
        console.log("target habits zero index:");
        console.log(targetHabit[0]);
        dispatch({action: 'edit_habit', payload: otherHabits});
        
        const result = await AsyncStorage.setItem('HABITS', JSON.stringify(otherHabits));
        console.log(result);

    } catch (err) {
        console.log(err);
    }
}

const addHabit = (dispatch) => async (habitName) => {
    let habitsArray = [];
    let idNumber;
    try {
        let storedHabits = await AsyncStorage.getItem('HABITS');
        if (storedHabits !== null) {
            habitsArray = JSON.parse(storedHabits);
        }

        let habitId = await AsyncStorage.getItem('HABIT_ID');
        if (habitId !== null) {
            let Id = JSON.parse(habitId);
            idNumber = Id[0] + 1;
        }
        else {
            idNumber = 1;
        }
        console.log("id number: " + idNumber);
        const habitData = { id: idNumber, habitName: habitName, dateAdded: new Date(), checked: false, dates: [], streak: 0 };
        console.log("habit data: " + habitData);
        await AsyncStorage.removeItem('HABIT_ID');
        await AsyncStorage.removeItem('HABITS');
        habitsArray.push(habitData);
        dispatch({action: 'add_habit', payload: habitsArray})
        await AsyncStorage.setItem('HABIT_ID', JSON.stringify([idNumber]));
        await AsyncStorage.setItem('HABITS', JSON.stringify(habitsArray));
        const result = await AsyncStorage.getItem('HABITS');
        console.log(result);
    } catch (err) {
        console.log(err);
    }
    //add to async storage
    //dispatch to reducer with payload habitname, daysofweek, empty arr for dates, and generate an id (how?)
    //if callback, callback()
}

const markHabit = (dispatch) => async (id, checkedStatus) => {
    //edit habit in async storage to update date
    //dispatch to reducer dates, habitname, id, daysofweek
    let habitsArray = [];
    try {
        let storedHabits = await AsyncStorage.getItem('HABITS');
        if (storedHabits !== null) {
            habitsArray = JSON.parse(storedHabits);
        }
       
        let targetHabit = habitsArray.filter(item => item.id === id);
        let otherHabits = habitsArray.filter(item => item.id !== id);

        await AsyncStorage.removeItem('HABITS');
        targetHabit[0].checked = checkedStatus;
        if (checkedStatus) {
            targetHabit[0].dates.push(new Date());
            targetHabit[0].streak += 1;
        }
        else {
            targetHabit[0].dates.pop();
            targetHabit[0].streak -= 1;
        }
        console.log("marked habit: " + targetHabit[0]);

        otherHabits.push(targetHabit[0]);
        dispatch({action: 'mark_habit', payload: otherHabits});
        
        const result = await AsyncStorage.setItem('HABITS', JSON.stringify(otherHabits));
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }

}

export const { Provider, Context } = createCustomContext(habitsReducer, { getHabits, addHabit, editHabit, deleteHabit, markHabit }, []);