import { Navbar } from './component/Navbar';
import { Home } from './component/Home';
import  Login  from './component/Login';
import Signup from './component/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import { userContext } from './Context';

function App() {
  const [logged, setLogged] = useState(false)
  return(
    <BrowserRouter>
          <userContext.Provider value = {{logged, setLogged}}>
          <Navbar>
            <Routes>
                <Route index element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/signup' element={<Signup />}/>
            </Routes>
            </Navbar>
          </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;
