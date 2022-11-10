import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import {} from './style';

export const Private = () => {
    const auth = useContext(AuthContext);
    

    return(
        <div>
            <h1>Private</h1>
            <hr/>
            <h2>Olá, {auth.user.name}, tudo bem?</h2>
        
        </div>
    );
}