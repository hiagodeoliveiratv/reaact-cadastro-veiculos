import { carReducer } from "../reducers/carReducer";
import { Car } from "../types/Car";
import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import { ActionTypes } from "../reducers/carReducer";

type CarContextType = {
    cars: Car[],
    dispatch: (action: ActionTypes)=>void;
   
}
const CARS_KEY = 'cars';

export const CarContext = createContext<CarContextType | null>(null);

export const CarProvider = ( { children } : { children: ReactNode } ) => {
    
    const [cars, dispatch] = useReducer(carReducer, JSON.parse(
        localStorage.getItem(CARS_KEY) || '[]'
    ));

    useEffect(()=>{
        localStorage.setItem(CARS_KEY, JSON.stringify(cars));
    }, [cars]);

    return (
        <CarContext.Provider value={{cars, dispatch}}>
            { children }
        </CarContext.Provider>
    );
}

export const useCar = ()=>useContext(CarContext);

