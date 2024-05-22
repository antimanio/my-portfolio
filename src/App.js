
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 
import Navbar from './components/Navbar.js';
import Register from './components/Register.js';

const App = () => {
  return (
   <>
   <Navbar />
   <Register />
   </>
  );
}

export default App;
