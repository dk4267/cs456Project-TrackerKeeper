import { AsyncStorage } from 'react-native';
import createCustomContext from './createCustomContext';

const tasksReducer = (state, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}

export const { Provider, Context } = createCustomContext(tasksReducer, {}, {});