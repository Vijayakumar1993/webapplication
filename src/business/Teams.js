import React from "react";
import CommonNavbar from "../components/util/NavigationBar";
import Footer from "../components/util/Footer";


export default class Teams extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <CommonNavbar />
                <h1>Teams</h1>
                <Footer />
            </>
        )
    }
}