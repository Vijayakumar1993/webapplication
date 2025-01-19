import React from "react";
import FormGroup from './FromGroup';

class CreateForm extends React.Component {
    constructor(props) {
        super(props);
    }

    submit(){
        alert("clicked")
    }
    render() {
        const fields = this.props.fields;
        return (
            <>
                <form>
                    {fields.map((field, index) => {
                        return (
                            <FormGroup
                                key={index}
                                type={field.type}
                                id={field.id}
                                placeholder={field.placeholder}
                                help={field.help}
                                name={field.name}
                                event={this.submit}
                            />
                        );
                    })}
                    <span className="padding"><button className="btn btn-sm btn-success">Submit</button></span>
                    <span className="padding"><button className="btn btn-sm btn-primary">Reset</button></span>
                </form>
            </>
        );
    }
}

export default CreateForm;