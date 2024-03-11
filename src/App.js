import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Admin } from './Components/Login/Admin';
import { LoginSignup } from './Components/Login/LoginSignup';
import About from './Components/Menu/About';
import Contactus from './Components/Menu/Contactus';
import Home from './Components/Menu/Home';
import Drop from './Components/Nav/Drop';
import Sidebar from './Components/AdminDash/Sidebar';
import Add from './Components/Admin/Add';
import Remove from './Components/Admin/Remove';
import Stocks from './Components/Admin/Stocks';
import Revenue from './Components/Admin/Revenue';
import EmpAdd from './Components/Employee/EmpAdd';
import EmpStocks from './Components/Employee/EmpStocks';
import Empside from './Components/EmployeeDash/Empside';
const App = () => {
  return (
    <BrowserRouter>
      <>

        <Drop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path='/Empside' element={<Empside/>}/>
          <Route path="/stocks"
            element={ <> <Sidebar /> <Stocks /> </> } />
          <Route path="/add"
            element={ <> <Sidebar /> <Add /> </>  } />
          <Route path="/remove"
            element={ <> <Sidebar /> <Remove /> </> } />
          <Route path="/revenue"
            element={ <><Sidebar /><Revenue /></> } />
           
      <Route path="/empstocks"
            element={<><Empside /><EmpStocks /></>}/>
          <Route path="/empadd"
            element={ <><Empside /><EmpAdd /> </> }/>
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
