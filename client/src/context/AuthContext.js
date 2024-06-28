import { createContext,useReducer } from "react";
export const AuthContext=createContext(null);
export const AuthReducer=(state,action)=>{
    switch(action.type){
        case 'Login':
            return {user: action.payload};
        case 'Logout':
            return {user: null};
        default:
            return state;
    }
}
export const AuthContextProvider=({children})=>{
const [state,dispatch]=useReducer(AuthReducer,{user:null});
return <AuthContext.Provider value={{...state,dispatch}}>
    {children}
</AuthContext.Provider>

}