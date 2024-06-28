
import {useState} from 'react';
import {useAuthContext} from './useAuthContext'
export default function useSignUp(){
    const [loading,setLoading]=useState(null);
    const [error,setError]=useState(null);
    const {dispatch}=useAuthContext();
    const signup=async (user)=>{
        setLoading(true);
        setError(null);
        const response=await fetch("http://localhost:5000/register",{method:"POST",mode:'cors',
        
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
            localStorage.setItem('account',JSON.stringify(json));
            dispatch({type:'Login',payload:json});
            setLoading(false);
        }

}
return {loading,error,signup};
}