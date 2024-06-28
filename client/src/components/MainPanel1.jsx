import React,{useState,useEffect,useRef,useContext} from 'react';
import './MainPanel1.css';
import {userContext} from '../userContext';
import Chatbubble from './Chatbubble';

export default function MainPanel1({city,socket}){
    
    const user=useContext(userContext);
    const [allMessage,setAllMessage]=useState([]);
    const [message,setMessage]=useState('');
    const inputRef=useRef(null);
    useEffect(()=>{
        if(city!=="")
            socket.emit('join_room',{city});
            socket.on('prev_message',(data)=>{
                console.log(typeof data)
                setAllMessage(allMessage=>[...data])
            })
            socket.on('new_message',(user,mssg,time)=>{

            setAllMessage(allMessage=>[...allMessage,{user: user,msg: mssg,city: city,time: time}]);
          
        });
        return ()=>{
            socket.off('new_message');
            socket.off('prev_message');
            socket.emit('leave_room',city);
            
    }
    }
    ,[city,socket]);

   
    
    function handleSend(e){
        let msg=message;
        const __createdtime__=new Date().toLocaleDateString();
        if(msg!==""){
   
            const data={
                user: user,
                msg: msg,
                city: city,
                time: __createdtime__,
            };
            socket.emit('send_message',{data});
          
            
            
            inputRef.current.textContent="";
        }
    }
    return <div className="main-panel">
        <div className='b-container'>
            {allMessage.toReversed().map((item,index) => {

           return <Chatbubble key={index} usr={item.user} message={item.msg} time={item.time}/>})}
        </div>

        <div className='send-box'>
            <div ref={inputRef} contentEditable="true" className='text-box' onInput={(e)=>{
               
                setMessage(e.currentTarget.textContent)}}></div>
            <input id="send-img" alt="send button" type="image" src="send-svgrepo-com.svg" onClick={handleSend}/>
        </div>

    </div>;
}