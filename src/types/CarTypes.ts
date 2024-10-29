export interface Car {
    _id: string | null;
    carName: string;
    date: Date;
    carNo: string;
    mechanicName: string;
    serviceAdvisor: string;
    RO_PRW : string;
    work: string;
}

export type CarState = Car[];

export enum CarActionType {
    ADD_CAR_DETAILS = "ADD_CAR_DETAILS",
    DELETE_CAR_DETAILS = "DELETE_CAR_DETAILS",
    UPDATE_CAR_DETAILS = "UPDATE_CAR_DETAILS",
    FETCH_CARS_DETAILS = "FETCH_CARS_DETAILS",
    GET_CAR_DETAILS = "GET_CAR_DETAILS",
}

interface AddCarDetailsAction {
    type: CarActionType.ADD_CAR_DETAILS;
    payload: Car;
}

interface DeleteCarDetailsAction {
    type: CarActionType.DELETE_CAR_DETAILS;
    payload: Car; //_id to delete the car from the local state
}

interface UpdateCarDetailsAction {
    type: CarActionType.UPDATE_CAR_DETAILS;
    payload: Car;
}

interface FetchCarsDetailsAction {
    type: CarActionType.FETCH_CARS_DETAILS;
    payload: CarState;
}

interface GetCarsDetailsAction {
    type: CarActionType.GET_CAR_DETAILS;
    payload: Car;
}

export type CarAction = AddCarDetailsAction | DeleteCarDetailsAction | UpdateCarDetailsAction | FetchCarsDetailsAction | GetCarsDetailsAction;