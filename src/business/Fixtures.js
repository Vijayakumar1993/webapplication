import React from "react";
import CommonNavbar from "../components/util/NavigationBar";
import Footer from "../components/util/Footer";
import Table from "../components/util/Table";
import {SAMPLE_MSG} from '../data/static.js'


export default class Fixtures extends React.Component {
    constructor() {
        super();
    }

    render() {
        const heading = ['name', 'age', 'phone', 'email']
        
        return (
            <>
                <CommonNavbar />
                <Table heading={heading} rows={SAMPLE_MSG} />
                <Footer />
            </>
        )
    }
}