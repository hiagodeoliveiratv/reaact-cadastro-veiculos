import { useNavigate } from "react-router-dom";
import { Car } from "../types/Car";
import { useCar } from "../contexts/CarContext";

type Props = {
    car: Car;
}

export const TableItem = ( { car } : Props) =>{

    const navigate = useNavigate();

    const carCtx = useCar();

    const handleDelete = ()=>{
        carCtx?.dispatch({
            type: 'delete',
            payload: {
                id: car.id
            }
        });
    }
    return (
       
        <tr 
            className="border-b "
        >
            <td className="p-3 ">{car.brand}</td>
            <td className="p-3">{car.model}</td>
            <td className="p-3">{car.year}</td>
            <td className="p-3">{ car.price }</td>

            <td className="p-3 h-3 text-right">
                <button
                    className="rounded text-sm bg-blue-400 px-3 py-1 mr-3 text-white"
                    onClick={()=>navigate(`/editar/${car.id}`)}
                >Editar</button>
                <button onClick={handleDelete} className="rounded text-sm bg-red-400 px-3 py-1 text-white">Excluir</button>
                
            </td>

                
        </tr>
       
    );
}