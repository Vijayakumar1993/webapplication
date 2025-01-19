import React from "react";
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'
import Login from "./Login";
import Index from './Index'
import Fatel from './Fatel'
import Home from "../business/Home";
import Configuration from "./Coniguration";
import News from '../business/News'
import Fixtures from "../business/Fixtures";
import Teams from "../business/Teams";
import Results from "../business/Results";
import Players from "../business/Players";
import Gallery from "../business/Gallery";
import Shop from "../business/Shop";
import Tickets from "../business/Tickets";
import LiveScores from "../business/LiveScores";
import FanZone from "../business/FanZone";
import AboutUs from "../business/AboutUs";
import ContactUs from "../business/ContactUs";

class CommonRouter extends React.Component {
    constructor() {
        super();
    }

    render() {
        const index =Index
        return (
            <Router>
                <Routes>
                    <Route path="/" Component={Login} />
                    <Route path="/home" Component={Home} />
                    <Route path="/logout" Component={Login} />
                    <Route path="/index" Component={index} />
                    <Route path="/news" Component={News} />
                    <Route path="/configuration" Component={Configuration} />
                    <Route path="/fixtures" Component={Fixtures} />
                    <Route path="/teams" Component={Teams} />
                    <Route path="/results" Component={Results} />
                    <Route path="/players" Component={Players} />
                    <Route path="/gallery" Component={Gallery} />
                    <Route path="/shop" Component={Shop} />
                    <Route path="/tickets" Component={Tickets} />
                    <Route path="/live-scores" Component={LiveScores} />
                    <Route path="/fan-zone" Component={FanZone} />
                    <Route path="/about" Component={AboutUs} />
                    <Route path="/contact" Component={ContactUs} />
                    <Route path="*" Component={Fatel} />
                </Routes>
            </Router>
        )
    }
}

export default CommonRouter