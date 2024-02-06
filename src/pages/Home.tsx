import { useCar } from "../contexts/CarContext";
import { TableItem } from "../components/TableItem";

export const Home = ()=>{

    const carCtx = useCar();

    return (
        <>
            <div className="flex justify-between">

                <h1 className="font-bold text-xl">Carros disponíveis</h1>
                <p className="text-gray-500">
                    Total {carCtx?.cars.length} carro{carCtx?.cars.length && carCtx?.cars.length > 1 ? 's':'' }
                </p>

            </div>

            <table className="mt-10 w-full">
                <thead>
                    <tr className="text-left bg-gray-400 text-white p-3">
                        <th className="p-3">Marca</th>
                        <th className="p-3">Modelo</th>
                        <th className="p-3">Ano</th>
                        <th className="p-3">Valor</th>
                        <th className="p-3 text-right pr-5">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {carCtx?.cars.map( car =>(
                       <TableItem
                            key={car.id}
                            car={car}
                       />
                    ))}

                    {!carCtx?.cars.length && 
                        <p className="mt-5">Não há informações disponíveis.</p>
                    }
                    
                </tbody>
            </table>
        </>

        
    )
}