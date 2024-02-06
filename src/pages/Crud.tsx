import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


import { Input } from "../components/Input";
import { useCar } from "../contexts/CarContext";


export const Crud = ()=>{

    const navigate = useNavigate();

    const carCtx = useCar();

    const params = useParams();

    useEffect(()=>{
        
        if(carCtx?.cars && params.id){
            setCar(carCtx.cars[+params.id]);
        }
      
    },[params]);


    const [ car, setCar ] = useState({
        brand: '',
        model: '',
        year: 0,
        km: 0,
        price: 0,
    });

    const handleChange = (label: string, value: string | number)=>{
        if(label && value){
            setCar({...car, [label]: value});
        }
    }

    const handleRegister = (e : React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault();

        if (!car.brand.toString() || !car.km || !car.model || !car.price || !car.year) {
            alert("Preencha todos os campos");
            return;
        }

        if(params.id){

            carCtx?.dispatch({
                type: 'edit',
                payload: {...car, id: +params.id}
            });
    

        } else {

            carCtx?.dispatch({
                type: 'add',
                payload: car
            });
    

        }
       
        navigate('/');

        
    }

    return (
        <>
            <Link to="/">Voltar</Link>

            <h1 className="font-bold text-xl mt-3">Cadastro de Veículo</h1>

            <div className="flex">

                <form className="flex-1 mt-5" onSubmit={handleRegister}>
                  
                    <select className="w-full border-b border-gray-300 py-3 mb-3 outline-none" 
                        value={car.brand}
                        onChange={(e)=>handleChange('brand',e.target.value)}
                    >
                        <option  disabled hidden>Selecione uma opção</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Peugeot">Peugeot</option>
                        <option value="Citroen">Citroen</option>
                    </select>

                    <Input
                        label="model"
                        placeholder="Digite o modelo"
                        handleChange={handleChange}
                        value={car.model}
                    />
                 
                    <div className="flex">

                        <Input
                            label="year"
                            placeholder="Digite o ano"
                            handleChange={handleChange}
                            mr={true}
                            value={car.year}
                        />
                                          
                        <Input
                            label="km"
                            placeholder="Digite a quilometragem"
                            handleChange={handleChange}
                            value={car.km}
                        />

                    </div>

                    <Input
                        label="price"
                        placeholder="Digite o valor"
                        handleChange={handleChange}
                        value={car.price}
                    />

                    <button
                        className="w-full mt-3 bg-gray-400 text-white p-3 rounded"
                    >
                        {params.id? 'Atualizar':'Cadastrar'}
                    </button>
                    

                </form>
            

                <div className="w-6/12">
                    <img src="/assets/carro.png" />
                </div>
            </div>
            
        </>
    );
}