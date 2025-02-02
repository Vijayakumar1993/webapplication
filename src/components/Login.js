import React from "react";
import { COMPANY, LOGIN_FIELDS } from '../data/static.js';
import { FormComponent } from './util/FromGroup';
import Panel from "./util/Panel";
import { Button } from "./util/Widgets";

class Login extends React.Component {
    fields = LOGIN_FIELDS;
    render() {
        const header = <div className="fw-bold">Login</div>
        const footer = (
            <div className="d-flex justify-content-between">
                <a href="/registration" className="fst-italic">Create new account</a>
                <a href="#" className="fst-italic">Forgot Password?</a>
            </div>
        )
        const company = <>
            <h1>{COMPANY.name}</h1>
            <h4>{COMPANY.description}</h4>
        </>

        const loginForm = <div>
            {this.fields.map(element => {
                return (<div>
                    <FormComponent name={element.name} help={element.help} id={element.type}
                        type={element.type} placeholder={element.placeholder} />
                </div>)
            })}<Button value="Submit" className="btn btn-success" link="/dashboard"></Button>
            <Button value="Reset" className="btn btn-primary"></Button>
        </div>

        return <div className="row margin-top-10">
            <div className="col-md-6">
               {company}
            </div>
            <div className="col-md-6">
                <Panel heading={header} body={loginForm} footer={footer} />
            </div>
        </div>

    }
}

export default Login