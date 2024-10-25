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
}

interface AddCarDetailsAction {
    type: CarActionType.ADD_CAR_DETAILS;
    payload: Car;
}

interface DeleteCarDetailsAction {
    type: CarActionType.DELETE_CAR_DETAILS;
    payload: Car;
}

interface UpdateCarDetailsAction {
    type: CarActionType.UPDATE_CAR_DETAILS;
    payload: Car;
}

export type CarAction = AddCarDetailsAction | DeleteCarDetailsAction | UpdateCarDetailsAction;