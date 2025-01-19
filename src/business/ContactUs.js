import React from "react";
import CommonNavbar from "../components/util/NavigationBar";
import Footer from "../components/util/Footer";


export default class ContactUs extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <CommonNavbar />
                <h1>ContactUs</h1>
                <Footer />
            </>
        )
    }
}