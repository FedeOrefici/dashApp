import { ADD_PATIENTS, DATA_PATIENTS } from "./actionTypes";

export const addUser = (user) => {
    return {type: ADD_PATIENTS, payload: user}
}

export const datapatients = (payload) => {
    return {type: DATA_PATIENTS, payload}
}
