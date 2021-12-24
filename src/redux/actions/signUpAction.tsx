//Action Types
import { SIGNUP_LOADING, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../types";
import axios from "axios";
import { API_URL } from "../../config";
import client from "../../pages/graphQl";
import { gql } from "@apollo/client";

//Action Creator
export const signupLoading = () => ({
  type: SIGNUP_LOADING,
});
export const signupSuccess = (response: any) => ({
  type: SIGNUP_SUCCESS,
  value: response,
});
export const signupFailure = (response: any) => ({
  type: SIGNUP_FAILURE,
  value: response,
});
const query = gql`
  query login($email: String, $password: String) {
    login(input: { email: $email, password: $password }) {
      token
      message
    }
  }
`;
export const signup = (formData: { email: string; password: string }) => {
  console.log("ress", formData);
  // let res = client.query({
  //   query: query,
  //   variables: {
  //     // email: "vishal@arokee.com",
  //     // password: "123456"
  //     // input: {
  //       email: "vishal012@gmail.com",
  //       password: "123456"
  //     // }
  //   }
  // })
  const body = {
    email: formData.email,
    password: formData.password,
  };
  return async function (dispatch: any) {
    dispatch(signupLoading());
    let data = await axios
      .post(API_URL + "login", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("ress", response);

        dispatch(signupSuccess(response));
      })
      .catch((response) => {
        dispatch(signupFailure(response));
      });
  };
};
