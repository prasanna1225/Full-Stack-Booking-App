import axios from "axios";
import { createContext, useState, useEffect } from "react";
import {data} from 'autoprefixer'
export const UserConext= createContext({});
export function UserConextProvider({children}){
    const [user, setUser]=useState(null);
    const [ready, setReady]=useState(false);
    useEffect(()=>{
        if(!user){
           axios.get('/profile').then(({data})=>{
            setUser(data)
            setReady(true)
           });
         
        }
    },[]);
    return(
        <UserConext.Provider value={{user, setUser, ready}}>
        {children}
        </UserConext.Provider>
    )
}