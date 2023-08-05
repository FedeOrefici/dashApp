import { ADD_APPOINTMENTS, ADD_PATIENTS, DELETE_PATIENTS, DEL_APPOINTMENTS } from "./actionTypes";

export const addUser = (user) => {
    return {type: ADD_PATIENTS, payload: user}
}

export const deletePatient = (id) => {
    return {type: DELETE_PATIENTS, payload: id}
}

export const addAppointments = (payload) => {
    return {type: ADD_APPOINTMENTS, payload}
}

export const deleteAppointment = (id) => {
    return {type: DEL_APPOINTMENTS, payload: id}
}
