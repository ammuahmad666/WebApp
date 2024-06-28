import { useAuthContext } from "./useAuthContext";
import {useState} from 'react';

export default function useLogin(){
    const [loading,setLoading]=useState(null);
    const [error,setError]=useState(null);
    const {dispatch}=useAuthContext();
    const login=async (user)=>{
        setLoading(true);
        setError(null);
        const response=await fetch("http://localhost:5000/login",{method:"POST",mode:'cors',
         
        headers:{'accept':'application/json','Content-Type':'application/json;charset=utf-8'},
        body: JSON.stringify(user),
    });
    const json=await response.json();
    if(!response.ok)
        {
            setLoading(false);
            setError(json.error);
        }
        if(response.ok){
            console.log(json);
            localStorage.setItem('account',JSON.stringify(json));
            dispatch({type:'Login',payload:json});
            setLoading(false);
        }
    }
    return {error,loading,login};
}