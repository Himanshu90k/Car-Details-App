import {CarState, CarAction, CarActionType} from '../types/CarTypes'

const CarReducer = (state: CarState, action: CarAction): CarState => {

    // checks for the acton types such as delete, update etc.
    switch(action.type) {
        case CarActionType.ADD_CAR_DETAILS:
            return [ ...state, action.payload ];

        case CarActionType.DELETE_CAR_DETAILS:
            return state.filter( (car) => car._id !== action.payload._id)

        case CarActionType.UPDATE_CAR_DETAILS:
            return state.map( (car) => car._id === action.payload._id? action.payload : car )

        case CarActionType.FETCH_CARS_DETAILS:
            return action.payload

        case CarActionType.GET_CAR_DETAILS:
            return [action.payload]

        default:
            return state
    }
}

export default CarReducer