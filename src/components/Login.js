import React from "react";
import FormGroup from './util/FromGroup'
import Panel from "./util/Panel";
import { Button } from "./util/Widgets";
import {LOGIN_FIELDS} from '../data/static.js'

class Login extends React.Component {
    fields = LOGIN_FIELDS;
    render() {
        const header = <div className="fw-bold">Login</div>
        const footer = <a href="#" className="fst-italic">Forgot Password?</a>
        const loginForm = <div>
            {this.fields.map(element => {
                return (<div>
                    <FormGroup name={element.name} help={element.help} id={element.type}
                        type={element.type} placeholder={element.placeholder} />
                </div>)
            })}<Button value="Submit" className="btn btn-success" link="/index"></Button>
            <Button value="Reset" className="btn btn-primary"></Button>
        </div>
        return <div className="d-flex justify-content-center align-items-center margin-top-10">
            <Panel heading={header} body={loginForm} footer={footer} /></div>

    }
}

export default Login