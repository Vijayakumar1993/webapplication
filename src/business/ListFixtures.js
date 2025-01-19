import React from "react";
import CreateForm  from "../components/util/Form.js";
import Footer from "../components/util/Footer.js";
import CommonNavbar from "../components/util/NavigationBar.js";
import { CREATE_FIXTURES } from "../data/static.js";


export default class ListFixtures extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <>
                <CommonNavbar />
                <CreateForm fields={CREATE_FIXTURES}/>
                <Footer />
            </>
        )
    }
}