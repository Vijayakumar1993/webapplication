import React from "react";
import CommonNavbar from './util/NavigationBar'
import Footer from "./util/Footer";

export default class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <CommonNavbar menu={this.props.menu} />
                <Footer />
            </>

        )
    }
}  