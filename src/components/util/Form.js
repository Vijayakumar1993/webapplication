import React from "react";
import { FormComponent,FormCheckbox } from './FromGroup';
import Autocomplete from "./AutoComplete";

class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    submit(event) {
        const { id, value, checked, type,bae } = event.target;
        this.setState({ [id]: type === "checkbox" ? checked : value });
    }

    onSubmit(event) {
        alert(JSON.stringify(this.state))
        event.preventDefault();
    }
    render() {
        const fields = this.props.fields;
        return (
            <>
                <form>
                <div className="row">
                    {fields.map((field, index) => {
                        const type = field.type;
                        switch (type) {
                            case "text":
                                return <FormComponent key={index} name={field.name} help={field.help} id={field.id}
                                    type={field.type} placeholder={field.placeholder} event={this.submit} required={field.required} />;
                            case "checkbox":
                                return <FormCheckbox key={index} id={field.id} value={field.value} event={this.submit} name={field.name} type="checkbox"/>;
                            case "radio":
                                return <FormCheckbox key={index} id={field.id} value={field.value}  event={this.submit} name={field.name} type="radio"/>;
                            case "autocomplete":
                                return  <Autocomplete key={index} id={field.id} event={this.submit}  suggestions={field.values} placeholder={field.placeholder} />
                            default: return
                        }
                    })}
                    </div>
                    <div className="col-md-12 ">
                    <span className="padding-right-4px padding-top-4px "><button className="btn btn-sm btn-success" onClick={() => this.onSubmit()}>Submit</button></span>
                    <span className="padding-right-4px  padding-top-4px "><button className="btn btn-sm btn-primary">Reset</button></span>
                    </div>
                </form>
            </>
        );
    }
}

export default CreateForm;