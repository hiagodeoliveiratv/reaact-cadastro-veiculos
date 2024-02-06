import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';

import { Home } from './pages/Home';
import { Crud } from './pages/Crud';

const App = ()=>{

    const navigate = useNavigate();
    
    return (

        <div className="main">

            <header className="h-24 bg-gray-800">
                <div className="h-full flex container items-center justify-between mx-auto">
                    <div className="brand">
                       <h3 className="text-white font-bold text-xl">H7Mídia - Cadastro Veicular</h3> 
                    </div>
                    <button onClick={()=>navigate('/cadastro')} className="rounded p-3 text-white bg-gray-400 px-5">Cadastrar</button>
                </div>
            </header>

            <div className='container mx-auto mt-5'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/cadastro' element={<Crud />}/>
                    <Route path='/editar/:id' element={<Crud />}/>
                </Routes>
            </div>

            
        </div>
    );
}

export default App;