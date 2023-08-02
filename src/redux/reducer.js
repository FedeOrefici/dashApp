import { ADD_PATIENTS, DATA_PATIENTS } from "./actionTypes"

let initialState = {
    allPatients : []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PATIENTS: {
            return {
                ...state,
                allPatients: [...state.allPatients, action.payload]
            }
        }
        
        case DATA_PATIENTS: {
            return {
                ...state,
                allPatients: action.payload
            }
        }

        default:
            return state;
    }
}

export default rootReducer;