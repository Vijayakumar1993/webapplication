import React, { useState } from "react";

export default function Model({ id, header, body, footer,initOpen }) {
  const [open, setOpen] = useState(initOpen)
  const closeModel = () => setOpen(false)
  return (
    <>
    {open && <div
      className="modal fade show"
      tabIndex="-1"
      role="dialog"
      id={id}
      style={{
        display: "block",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{header}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeModel}
            ></button>
          </div>
          <div className="modal-body">
            <p>{body}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModel}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              {footer}
            </button>
          </div>
        </div>
      </div>
    </div>}
    </>
    )
}