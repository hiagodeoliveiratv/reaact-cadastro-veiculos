import { Brand } from "../types/Brand";
import { Car } from "../types/Car";

type AddAction = {
    type: 'add',
    payload: {
        brand: string;
        model: string;
        year: number;
        km: number;
        price: number;
    }
}
type EditAction = {
    type: 'edit',
    payload: {
        id: number;
        brand: string;
        model: string;
        year: number;
        km: number;
        price: number;
    }
}
type DeleteAction = {
    type: 'delete',
    payload: {
        id: number;
    }
}

export type ActionTypes = AddAction | EditAction | DeleteAction;

export const carReducer = ( state: Car[], action : ActionTypes ) => {

    switch(action.type){
        case 'add':
            return [...state, {
                id: state.length,
                brand: action.payload.brand,
                model: action.payload.model,
                year: action.payload.year,
                km: action.payload.km,
                price: action.payload.price
            }];
          
        case 'edit':
            return state.map(car=>{

                if(car.id == action.payload.id){
                    car.brand = action.payload.brand;
                    car.model = action.payload.model;
                    car.year = action.payload.year;
                    car.km = action.payload.km;
                    car.price = action.payload.price;
                }
                return car;
            });
        case 'delete':
            return state.filter(car=>car.id !== action.payload.id);    
        default: 
            return state;
    }
}