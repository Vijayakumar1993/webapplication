import React from "react";

export default function Tabs({ fields }) {
    return (
        <div className="d-flex">
            {/* Left-side vertical navbar */}
            <ul className="nav nav-pills flex-column me-3" id="pills-tab" role="tablist">
                {fields.map(field => (
                    <li className="nav-item" role="presentation" key={field.id}>
                        <button 
                            className="nav-link" 
                            id={`pills-${field.id}-tab`} 
                            data-bs-toggle="pill" 
                            data-bs-target={`#pills-${field.id}`} 
                            type="button" 
                            role="tab" 
                            aria-controls={`pills-${field.id}`} 
                            aria-selected="false"
                        >
                            {field.name}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Tab content on the right side */}
            <div className="tab-content flex-grow-1" id="pills-tabContent">
                {fields.map(field => (
                    <div 
                        className="tab-pane fade" 
                        id={`pills-${field.id}`} 
                        role="tabpanel" 
                        aria-labelledby={`pills-${field.id}-tab`} 
                        key={field.id}
                    >
                        {field.component}
                    </div>
                ))}
            </div>
        </div>
    );
}
