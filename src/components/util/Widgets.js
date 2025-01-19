import React from "react";
import { useNavigate } from "react-router-dom";

export function Button(props){
    const navigate = useNavigate()
    function onClick(){
       navigate(props.link || "#") 
    }
    return (
        <span className="padding">
        <button className={props.className} onClick={onClick}>{props.value}</button>
        </span>
    )
}

export function TextField(props){
    return (
        <span className="padding">
        <input type="text" id={props.id} value={props.default} />
        </span>
    )
}