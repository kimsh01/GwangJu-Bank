import './App.module.css';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Body from '../src/components/order/Body';
import Confirm from '../src/components/order/Confirm';
import Deliver from '../src/components/order/Deliver';
import List from '../src/components/list/List';
import Complete from '../src/components/complete/Complete';
import Login from '../src/components/login/Login';
import KorW from '../src/components/card/korea/KorW';
function App() {


  return (
      <div className='C_container'>
          <Login />    
      </div>
  );
}

export default App;
