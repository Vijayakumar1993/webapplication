import React from "react";
import { validate } from "./Validator";

export class FormComponent extends React.Component  {
    constructor(props) {
        super(props)
        if(this.props.required){
            this.state = {valid:true}
        }else{
            this.state = {valid:false}
        }
    }

    render() {
        console.log("Re-render triggered...!")
        const { type, name, id, placeholder, help, event,value } = this.props;
        const {valid} = this.state;
        console.log(valid)
        return (
            <div className="form-group padding-bottom-ten container-fluid ">
                <label htmlFor={name} className="fw-semibold">{name} {valid  && <b className="danger">*</b>}</label>
                <input type={type} value={value} onChange={ev=>{validate(ev,this);event(ev)}} className="form-control form-control-sm" id={id} aria-describedby="emailHelp" placeholder={placeholder} />
                <small id="emailHelp" className="form-text text-muted">{help || ""}</small>
                {valid && <small id="emailHelp" className="danger form-text text-muted">{name} is required.</small>}
            </div>
        )
    }
}

export class FormCheckbox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="form-check padding-bottom-ten container-fluid ">
                <input className="form-check-input" onChange={this.props.event} type={this.props.type} name={this.props.name} value={this.props.value} id={this.props.id} checked={this.props.check} />
                <label className="form-check-label" for={this.props.id}>
                    {this.props.value}
                </label>
            </div>
        )
    }
}

