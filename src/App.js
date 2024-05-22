import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import { BrowserRouter, Routes, Route } from "react-router-dom";

 
//components
import Home from './components/Home.js';
import Register from './components/Register.js';
import Login from './components/Login.js';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
