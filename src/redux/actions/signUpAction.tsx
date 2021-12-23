//Action Types
import { SIGNUP_LOADING, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../types";
import axios from "axios";
import { API_URL } from "../../config";

//Action Creator
export const signupLoading = () => ({
   type: SIGNUP_LOADING
});
export const signupSuccess = (response:any) => ({
    type: SIGNUP_SUCCESS,
    value: response
 });
 export const signupFailure = (response:any) => ({
    type: SIGNUP_FAILURE,
    value: response
 });
  
export const signup = (formData: {email:string, password: string}) => {
    var bodyFormData = new FormData();
    bodyFormData.append('firstname', 'Vishal');
    const body = {
        email:formData.email,
        password: formData.password
    }
    
    return function(dispatch:any) {
        axios.post(
            API_URL+'login', 
            body, 
            {
                headers: { 
                    'Content-Type' : 'application/json' 
                }
            }
    ).then((response) => {console.log("hurraa",response);dispatch(signupSuccess(response));})
    .catch((response) => {signupFailure(response);});
        }
};