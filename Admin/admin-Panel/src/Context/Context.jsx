import React from 'react'
import { createContext, useContext, useState ,useEffect} from 'react'
export const storeContext=createContext();
const Context = (props) => {
    const[token,setToken]=useState(localStorage.getItem("token") || "");
    useEffect(() => {
        localStorage.setItem("token", token);
      }, [token]);
    const value={token,setToken};
    
  return (
    <storeContext.Provider value={value}>
        {props.children}
    </storeContext.Provider>
  )
}

export default Context