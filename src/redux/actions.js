import { ADD_APPOINTMENTS, ADD_PATIENTS, DELETE_PATIENTS } from "./actionTypes";

export const addUser = (user) => {
    return {type: ADD_PATIENTS, payload: user}
}

export const deletePatient = (id) => {
    return {type: DELETE_PATIENTS, payload: id}
}

export const addAppointments = (payload) => {
    return {type: ADD_APPOINTMENTS, payload}
}
