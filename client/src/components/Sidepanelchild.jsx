import React from "react";

import './Sidepanelchild.css';
export default function SidePanel({msg,isActive,onSelect,imgSrc,imgAlt}){
    
    
    if(isActive)
        return <div className="sidepchild selected" onClick={onSelect}>
                <img className="img" src={imgSrc} alt={imgAlt} width="20" height="20"/>
                <p>{msg}</p>
            </div>
    return <div className="sidepchild" onClick={onSelect}>
                    <img className="img" src={imgSrc} alt={imgAlt} width="20" height="20"/>
                 <p>{msg}</p>
        </div>
}