import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import { BrowserRouter, Routes, Route } from "react-router-dom";

 
//components
import Home from './components/Home.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import QueueAdmin from './components/QueueAdmin.js';
import QueueUser from './components/QueueUser.js';
import PrivateRoutes from "./utils/PrivateRoutes.js";
import { AuthProvider } from './utils/AuthContext.js';


const App = () => {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route element={<PrivateRoutes/>}>
            <Route path="/admin/queue" element={<QueueAdmin />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/user/queue" element={<QueueUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </>
  );
}

export default App;
