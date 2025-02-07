import React from "react";
import { useParams } from "react-router-dom";
import CreateForm from "../components/util/Form";
import Panel from "../components/util/Panel";
import { PERSON } from "../data/static";

export default function ViewPerson(props){
    
        const {value} = useParams();
        const registration  = <CreateForm fields={PERSON} />
        const heading = <>
            <h4>Account #{value} Detail</h4>
        </>
        return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Panel heading={heading} body={registration}/>
        </div>)
}