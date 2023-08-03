import { ADD_PATIENTS, DELETE_PATIENTS } from "./actionTypes"

let initialState = {
    allPatients : [],
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
b 
        default: 
            return state;
    }
}

export default rootReducer;