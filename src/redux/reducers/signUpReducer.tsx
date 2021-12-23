import {SIGNUP_LOADING,SIGNUP_SUCCESS,SIGNUP_FAILURE} from '../types';

const signupReducer = (state = {}, action: { type: any;value: any }) => {
    switch (action.type) {
        case SIGNUP_LOADING:
            return {...state, value:action.value};
        case SIGNUP_SUCCESS:
            console.log("aar a", action.value)
            return {...state, value: action.value};
        case SIGNUP_FAILURE:
            return {...state, value: action.value};
        default:
            return {...state};
    }
};

export default signupReducer;