import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import signupReducer from './signUpReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    signupReducer: signupReducer
});

export default rootReducer;