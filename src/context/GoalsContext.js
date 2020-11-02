import { AsyncStorage } from 'react-native';
import createCustomContext from './createCustomContext';

const goalsReducer = (state, action) => {
    switch (action.type) {
        case 'get_goals':
            return action.payload;
        default: 
            return state;
    }
}



const getGoals = (dispatch) => async () => {
    try {
        const response = await AsyncStorage.getItem('GOALS');
        if (response === null) {
            dispatch({type: 'get_goals', payload: []});
        }
        dispatch({type: 'get_goals', payload: JSON.parse(response)});
    } catch (err) {
        console.log(err);
    }

}

const editGoals = (dispatch) => async (goalOne, goalTwo, goalThree, callback) => {
    try {
        const response = await AsyncStorage.getItem('GOALS');
        console.log("checkpoint 1")
        if (response !== null) {
            await AsyncStorage.removeItem('GOALS');
        }
        await AsyncStorage.setItem('GOALS', JSON.stringify([goalOne, goalTwo, goalThree]));
        console.log("checkpoint 3");
        const result = await AsyncStorage.getItem('GOALS');
        console.log('checkpoint 4');
        console.log(result);
        if (callback) {
            callback();
        }
    } catch (err) {
        console.log(err);
    }
}

export const { Provider, Context } = createCustomContext(goalsReducer, { getGoals, editGoals }, []);