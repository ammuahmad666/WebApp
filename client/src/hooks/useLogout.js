
import { AuthContext } from "../context/AuthContext";

export default function useLogout(){
    const {dispatch}=AuthContext();
    const logout=()=>{
        localStorage.removeItem('account');
        dispatch({type:'Logout'})
    };
    return {logout};
}