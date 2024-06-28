import React,{useContext} from "react";
import './ChatBubble.css';
import {userContext} from '../userContext';

export default function ChatBubble({usr,message,time}){
        const user=useContext(userContext);
  
        return (usr!==user?(<div className="bubble-container">
                
                <div className="bubble">
                   <span className="userName">{usr}</span>
                   <p>{message}</p> 
                </div>
                <span className="time">{time.substr(0,10)}</span>
                
                </div>):(<div className="bubble-container-right">
                <div className="bubble bubble-right">
                <span className="userName">{usr}</span>
                   <p>{message}</p> 
                </div>
                <span className="time">{time.substr(0,10)}</span>
                </div>))

}