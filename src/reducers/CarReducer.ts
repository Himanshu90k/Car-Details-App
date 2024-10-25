import axios from 'axios';
import {CarState, CarAction, CarActionType} from '../types/CarTypes'

const CarReducer = async (state: CarState, action: CarAction): Promise<CarState | undefined> => {

    // checks for the acton types such as delete, update etc.
    switch(action.type) {
        case CarActionType.ADD_CAR_DETAILS:
            try {
                const res = await axios.post('localhost:4000/api/car-details', action.payload)
                if(res.status !== 201) {
                    throw new Error("Error in adding data to the server")
                }
                return [
                    ...state,
                    action.payload
                ]

            } catch (error) {
                console.error(error)
            }
            break; // breaks the flow of code

        case CarActionType.DELETE_CAR_DETAILS:
            try {
                const res = await axios.delete(`localhost:4000/api/car-details/:${action.payload._id}`)
                if (res.status !== 200) {
                    throw new Error("Error Deleting the Car Details")
                }
                return state.filter( (car) => car._id !== res.data._id)

            } catch (error) {
                console.error(error)
            }
            break;

        case CarActionType.UPDATE_CAR_DETAILS:
            try {
                const res = await axios.put(`localhost:4000/api/car-details/:${action.payload._id}`, action.payload)
                if(res.status !== 200) {
                    throw new Error("Error updating the details")
                }
                return state.map( (car) => car._id === res.data._id? res.data : car )
            } catch (error) {
                console.error(error)
            }
            break;

        default:
            return state
    }
}

export default CarReducer