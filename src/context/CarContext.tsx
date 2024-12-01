export interface Car {
    _id: string | undefined;
    date: string;
    carName: string;
    carNo: string;
    mechanicName: string;
    serviceAdvisor: string;
    RO_PRW: string;
    work: string;
}

import axios from 'axios';
import { createContext, useContext, ReactNode } from "react";
import { useState } from 'react';
import { toast } from 'react-toastify';

interface CarContextType {
    cars: Car[];
    car: Car;
    GetCar: ((id: string) => Promise<boolean>)
    GetCars: ((date: string) => Promise<boolean>)
    DeleteCar: ((_id: string) => Promise<void>)
    UpdateCar: ((newCar: Car) => Promise<void>)
    AddCar: ((newCar: Car) => Promise<void>)
    AllCars: ((year: string) => Promise<boolean>)
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarContextProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [cars, setCars] = useState<Car[]>([])
    const [car, setCar] = useState<Car>({_id: "", date: "", carName: "", carNo: "", mechanicName: "", serviceAdvisor: "", RO_PRW: "", work: ""})
    const baseUrl = "https://car-details-api.devncreatives.com/api/car-details/";

    const AddCar = async (newCar: Car ) => {
        try {
            const res = await axios.post(baseUrl, newCar)
            if (res.status === 201) {
                setCars([...cars, newCar])
                toast.success("New Car Added")
                return
            }

            toast.error("Car data couldn't be added")

        } catch (error) {
            toast.error("Car data couldn't be added")
            console.error(error);
        }
    }

    const DeleteCar = async (_id: string) => {
        try {
            const res = await axios.delete(`${baseUrl}/${_id}`)
            if (res.status !== 200) {
                toast.error("The Car Data couldn't be deleted")
                return
            }
            setCars( (prevState) => {
                return prevState.filter( (car) => car._id !== res.data._id)
            })

        } catch (error) {
            toast.error("The Car Data couldn't be deleted")
            console.error(error);
        }
    }

    const UpdateCar = async (newCar: Car) => {
        try {
            const res = await axios.put(`${baseUrl}/${newCar._id}`, newCar)
            if (res.status === 200) {
                setCars(cars.map( (car) => car._id === newCar._id? newCar : car))
                setCar(newCar)
                toast.success("Car Details Updated")
                return
            }
            toast.error("Car Details could not be Updated.")
            
        } catch (error) {
            toast.error("Car Details could not be Updated.")
            console.error(error);
        }
    }

    const GetCars = async (date: string) => {
        try {
            const res = await axios.get<Car[]>(`${baseUrl}?date=${date}`)
            if (res.status === 200) {
                setCars(res.data)
                return false 
            }
            return false
            
        } catch (error) {
            setCars([])
            console.error(error);
            return false
        }
    }

    const AllCars = async (year: string) => {
        try {
            const res = await axios.get(`https://car-details-api.devncreatives.com/api/all-details/${year}`)
            if (res.status === 200) {
                setCars(res.data)
                return false
            }
            return false
        } catch (error) {
            setCars([])
            console.error(error);
            return false
        }
    }

    const GetCar = async (id: string) => {
        try {
            const res = await axios.get(`https://car-details-api.devncreatives.com/api/car-details/${id}`)
            if (res.status === 200) {
                setCar(res.data)
                return false
            }
            return false

        } catch (error) {
            setCar({_id: "", date: "", carName: "", carNo: "", mechanicName: "", serviceAdvisor: "", RO_PRW: "", work: ""})
            console.error(error)
            return false
        }
    }

    return (
        <CarContext.Provider value={{cars, car, GetCar, GetCars, DeleteCar, UpdateCar, AddCar, AllCars}}>
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