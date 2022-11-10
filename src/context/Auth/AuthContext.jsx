import { createContext, useEffect, useState } from "react";
import { useApi } from "../../hook/useApi";
import React from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const api = useApi();
    const signIn = async(email, password) => {
        const data = await api.signIn(email, password);
        if(data.user && data.token){
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    }
    const signOut = async() => {
        setUser(null);
        setToken('');
        api.logout();
    }
    const setToken = (token) => {
        localStorage.setItem('authToken', token);
    }
    useEffect(() => {
        const validateToken = async() => {
            const storageData = localStorage.getItem('authToken');
            if(storageData){
                const data = await api.validateToken(storageData);
                if(data.user){
                    setUser(data.user);
                }
            }
        }
        validateToken(); 
    }, [api]);
    
    return(
        <AuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}