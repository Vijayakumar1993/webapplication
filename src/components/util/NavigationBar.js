import React from 'react'
import { MENU_ITEMS,COMPANY } from '../../data/static.js'
import { Link } from 'react-router-dom'

export default class CommonNavbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const menus = MENU_ITEMS
        return (
            <nav className="margin-bottom-1-per navbar navbar-expand-lg navbar-dark bg-dark transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{COMPANY.name}</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {menus.map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link" to={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Hello, Username</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}