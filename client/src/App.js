import {Routes,Route} from 'react-router-dom';
import HomePage from './Pages/homePage.js';
import Login from './Pages/auth/Login.js';
import Register from './Pages/auth/Register.js';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <div >
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
