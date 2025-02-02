import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Fatel from './Fatel';
import Login from "./Login";
import Index from "./Index"
import Dashboard from "../business/Dashboard";
import CreateTeam from "../business/CreateTeam";
import Registration from "../business/Registration";

class CommonRouter extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" Component={Login} />
                    <Route path="/dashboard" Component={Dashboard} />
                    <Route path="/registration" Component={Registration} />
                    <Route path="/createTeam" Component={CreateTeam} />
                    <Route path="/logout" Component={Login} />
                    <Route path="*" Component={Fatel} />
                </Routes>
            </Router>
        )
    }
}

export default CommonRouter