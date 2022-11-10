import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import {Home} from './pages/Home/index';
import {Private} from './pages/Private/index';
import { RequireAuth } from './context/Auth/RequireAuth';
import { useContext } from 'react';
import { AuthContext } from './context/Auth/AuthContext';

const App = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async() => {
    await auth.signOut();
    window.location.href = window.location.href;
  }

  return (
    <div>
      <Link to='/'>Ir pra Home</Link>
      <br/>
      <Link to='/private'>Ir pra Private</Link>
      <br/>
      {auth.user &&  <button onClick={handleLogout}>Sair</button> }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/private' element={<RequireAuth><Private/></RequireAuth>}/>
      </Routes>
      
    </div>
  )
}

export default App
