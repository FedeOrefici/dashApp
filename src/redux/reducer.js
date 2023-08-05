import { ADD_APPOINTMENTS, ADD_PATIENTS, DELETE_PATIENTS, DEL_APPOINTMENTS } from "./actionTypes"

let initialState = {
    allPatients : [],
    appointments: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        
        case ADD_PATIENTS: 
            return {
                ...state,
                allPatients: [...state.allPatients, action.payload]    
        }

        case DELETE_PATIENTS:
            const updateUser = state.allPatients.filter((_, idx) => idx !== action.payload)
            return {
                ...state,
                allPatients: updateUser
            }
        
        case ADD_APPOINTMENTS:
            return {
                ...state,
                appointments: [...state.appointments, action.payload]
            }
        
        case DEL_APPOINTMENTS:
            const filterApp = state.appointments.filter((_, idx) => idx !== action.payload)
            return {
                ...state,
                appointments: filterApp
            }

        default: 
            return state;
    }
}

export default rootReducer;