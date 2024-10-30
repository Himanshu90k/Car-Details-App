import axios from 'axios';
import { createContext, useContext, useReducer, ReactNode } from "react";
import CarReducer from "../reducers/CarReducer";
import { CarActionType, CarState } from "../types/CarTypes";

interface CarContextType {
    state: CarState;
    GetCars: (() => Promise<void>);
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarContextProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [state, dispatch] = useReducer(CarReducer, []);
    const baseUrl = "https://car-details-app-api.onrender.com/api/car-details/";

    // const AddCar = async (newCar: Car ) => {
    //     try {
    //         const res = await axios.post(baseUrl, newCar)
    //         if (res.status !== 201) {
    //             throw new Error("The new car data was not added")
    //         }
    //         dispatch({ type: CarActionType.ADD_CAR_DETAILS, payload: newCar});

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // const DeleteCar = async (deleteCar: Car) => {
    //     try {
    //         const res = await axios.delete(`${baseUrl}/:id`)
    //         if (res.status !== 200) {
    //             throw new Error("The Car Data couldn't be deleted")
    //         }
    //         dispatch({type: CarActionType.DELETE_CAR_DETAILS, payload: deleteCar})

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // const UpdateCar = async (newCar: Car) => {
    //     try {
    //         const res = await axios.put(`${baseUrl}/:id`)
    //         if (res.status !== 200) {
    //             throw new Error("Car data updated")
    //         }
    //         dispatch({type: CarActionType.UPDATE_CAR_DETAILS, payload: newCar})

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const GetCars = async () => {
        try {
            const res = await axios.get(baseUrl)
            if (res.status !== 200) {
                throw new Error("Error in Fetching Data")
            }
            dispatch({type: CarActionType.FETCH_CARS_DETAILS, payload: res.data});

        } catch (error) {
            console.error(error);
        }
    }

    // const GetCar = async () => {
    //     try {
    //         const res = await axios.get(`${baseUrl}/:id`)
    //         if (res.status !== 200) {
    //             throw new Error("Error in Fetching Car Details")
    //         }
    //         dispatch({type: CarActionType.GET_CAR_DETAILS, payload: res.data});

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return (
        <CarContext.Provider value={{state, GetCars}}>
            {children}
        </CarContext.Provider>
    )
}

export const useCar = (): CarContextType => {
    const context = useContext(CarContext);
    if(!context) {
        throw new Error('useCarContext must be used with CarContextProvider');
    }
    return context;
}