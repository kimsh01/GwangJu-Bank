import './App.module.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Body from '../src/components/order/Body';
import Confirm from '../src/components/order/Confirm';
import Deliver from '../src/components/order/Deliver';
import List from '../src/components/list/List';
import Complete from '../src/components/complete/Complete';
import Login from '../src/components/login/Login';
import KorW from '../src/components/card/korea/KorW';
import Base from './components/orderItem/Base';

function App() {
  return (

    <>
  
      <Routes Base='/'>
         <Route path='/' element={<Login />} />
         <Route path='/body' element={<Body />} />
         <Route path='/base' element={<Base />} />
         <Route path='/list' element={<Link />} />
         <Route path='/deliver' element={<Deliver />} />
      </Routes> 
      {/* Routes를 사용하면 <Login /> 이 연속으로 두 페이지가 띄워짐 */}
      {/* --> 이 문제는 따로 <></>를 사용하지 않고 Routes로만 구성되어야 됨. */}
    </>
   
  );
}

export default App;
