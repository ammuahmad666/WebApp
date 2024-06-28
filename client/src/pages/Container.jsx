import React,{useState} from "react";
import './Container.css';
import Sidepanelchild from '../components/Sidepanelchild';
import MainPanel1 from '../components/MainPanel1';
import io from 'socket.io-client';

const socket=io.connect('http://localhost:5000');

export default function Container(){
    const [activeIndex,setactiveIndex]=useState(-1);
    const [city,setCity]=useState('');
    
    
    return <div className="container">
        <div className="sidepcontainer">
        <div className="sidepanel">
            <div className="sidepheader">
                <h1>Header</h1>
                <select name="City" value={city} id="City" onChange={(e)=>setCity(e.target.value)}>
                    <option value="default">Choose city</option>
                    <option value="test">Ttttest</option>
                    <option value="Allahabad">Allahabad</option>
                    <option value="Noida">Noida</option>
                    <option value="Warangal">Warangal</option>
                    
                </select>

            </div>
            <Sidepanelchild msg="CityChannel" isActive={activeIndex===1} onSelect={()=>setactiveIndex(1)} imgSrc="channelIcon.png" imgAlt="channelicon" />
            <Sidepanelchild msg="About" isActive={activeIndex===2} onSelect={()=>setactiveIndex(2)} imgSrc="aboutIcon.png" imgAlt="abouticon"/>
        </div>
        </div>
        {activeIndex===1?(
        <div className="mainpanel">
            <MainPanel1 key={city} city={city} socket={socket}/>
        </div>):(<div className="mainpanel"></div>)}
    </div>
}