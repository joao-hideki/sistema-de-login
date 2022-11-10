import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth/AuthContext';
import {} from './style';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = async() => {
        if(email && password){
            const isLogged = auth.signIn(email, password);
            if(isLogged){
                navigate('/private');
            } else {
                alert('Email ou/e senha incorretos')
            }
        }
        
    }

    return(
        <div>
            <h2>Página Fechada</h2>
            <hr/>
            <br/>
            <input 
                type='text' 
                placeholder='Digite o seu email'
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type='password' 
                placeholder='Digite sua senha'
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Entrar</button>
        </div>
    )
}