import React from "react";

export class FormComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { type, name, id, placeholder, help, event } = this.props;
        return (
            <div className="form-group padding-bottom-ten container-fluid ">
                <label htmlFor={name} className="fw-semibold">{name}</label>
                <input type={type} onChange={event} className="form-control form-control-sm" id={id} aria-describedby="emailHelp" placeholder={placeholder} />
                <small id="emailHelp" className="form-text text-muted">{help || ""}</small>
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
                <input className="form-check-input" onChange={this.props.event} type={this.props.type} name={this.props.name} value={this.props.value} id={this.props.id} />
                <label className="form-check-label" for={this.props.id}>
                    {this.props.value}
                </label>
            </div>
        )
    }
}