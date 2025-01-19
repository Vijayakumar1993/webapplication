import React from "react";

class FormComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {type,name,id,placeholder,help} = this.props;
        return (
                <div className="form-group padding-bottom-ten container-fluid ">
                    <label htmlFor={name} className="fw-semibold">{name}</label>
                    <input type={type} className="form-control form-control-sm" id={id} aria-describedby="emailHelp" placeholder={placeholder} />
                    <small id="emailHelp" className="form-text text-muted">{help || ""}</small>
                </div>
        )
    }
}

export default FormComponent