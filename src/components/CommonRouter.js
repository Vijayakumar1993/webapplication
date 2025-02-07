import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateTeam from "../business/CreateTeam";
import Dashboard from "../business/Dashboard";
import Registration from "../business/Registration";
import Setting from "../business/Settings";
import Fatel from './Fatel';
import Login from "./Login";
import ViewPerson from "../business/Viewperson";
import Schedule from "../business/Schedule";
import ManagePlayer from "../business/ManagePlayers";

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
                    <Route path="/settings" Component={Setting} />
                    <Route path="/logout" Component={Login} />
                    <Route path="/view/:value" Component={ViewPerson} />
                    <Route path="/schedule" Component={Schedule} />
                    <Route path="/managePlayers" Component={ManagePlayer} />
                    <Route path="*" Component={Fatel} />
                </Routes>
            </Router>
        )
    }
}

export default CommonRouter