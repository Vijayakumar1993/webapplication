import React from 'react';
import { MENU_ITEMS, COMPANY } from '../../data/static.js';
import { Link } from 'react-router-dom';

export default class CommonNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menus = MENU_ITEMS;

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <div className="container-fluid">
                    {/* Brand Name */}
                    <Link className="navbar-brand" to="/">{COMPANY.name}</Link>

                    {/* Toggler for Mobile View */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation Menu */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {menus.map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link" to={item.link}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Right-Aligned User Info */}
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Hello, {this.props.username || ""}
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}