import React from "react";
import CreateForm from "../components/util/Form";
import { COMPANY, REGISTRATION } from "../data/static";
import Panel from "../components/util/Panel";

export default class Registration extends React.Component{
    render(){
        const registration  = <CreateForm fields={REGISTRATION} />
        const heading = <>
            <h4>Create a new account</h4>
        </>
        return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Panel heading={heading} body={registration} footer={ <h4> <a href="/" className="fst-italic">Already have an account?</a> </h4>}/>
        </div>)
    }
}