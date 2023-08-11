import { ADD_APPOINTMENTS, ADD_PATIENTS, DELETE_PATIENTS, DEL_APPOINTMENTS, GET_DATA, UPDATE_DATA } from "./actionTypes"

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
            const updateLocalStorage = JSON.parse(localStorage.getItem('patients'))
            const updateStorage = updateLocalStorage.filter((_, idx) => idx !== action.payload)
            localStorage.setItem('patients', JSON.stringify(updateStorage))
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
        
        case GET_DATA:
            return {
                ...state,
                allPatients: action.payload
            }

        case UPDATE_DATA:
            return {
                ...state,
                allPatients: action.payload
            }

        default: 
            return state;
    }
}

export default rootReducer;