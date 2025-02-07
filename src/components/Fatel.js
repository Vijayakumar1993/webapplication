import React from "react";
import { Link } from "react-router-dom";

export default function Error404(){
     return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h3 className="mb-4">Oops! Page Not Found</h3>
            <p className="mb-4 text-muted">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link to="/" className="btn btn-primary">
                Go Back Home
            </Link>
        </div>
    );
}