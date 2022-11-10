//componente que vai analisar se vai validar ou não os dados recebidos
import { useContext } from "react";
import {AuthContext} from './AuthContext';
import {Login} from '../../pages/Login/index'

export const RequireAuth = ({children}) => {
    const auth = useContext(AuthContext);
    if(!auth.user){
        return <Login/>;
    }


    return children;
}