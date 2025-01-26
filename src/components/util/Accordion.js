import React from "react";

export default function Accordion(props) {
  const fields = props.fields;

  return (
    <div className="row-fluid">
      {fields.map((field, index) => {
        const target = `#collapse-${index}`; // Unique target for each collapsible item
        return (
          <div className="padding-left-4px" key={index}>
            <div className="accordion-item">
              <h2 className="accordion-header" id={`heading-${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={target} // Correctly link the target
                  aria-expanded="false"
                  aria-controls={`collapse-${index}`} // Make sure this matches the collapsible content's id
                >
                  {field.header}
                </button>
              </h2>
              <div
                id={`collapse-${index}`} // Unique id for each collapsible content
                className="accordion-collapse collapse"
                aria-labelledby={`heading-${index}`} // Correctly link to the header
                data-bs-parent="#accordionExample" // Parent accordion container
              >
                <div className="accordion-body">
                  <strong>{field.body}</strong>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}