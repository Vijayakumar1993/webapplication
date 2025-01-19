import React from "react";

class Panel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { heading, body, footer,className } = this.props;
        const headerClass = "card-header"
        return (
            <div className='card'>
                <div className={headerClass}>{heading}</div>
                <div className="card-body">
                    <p className="card-text">{body}</p>
                </div>
                <div className='card-footer'>{footer}</div>
            </div>)
    }
}

Panel.defaultProps = {
    className: "primary"
}
export default Panel;