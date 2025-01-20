import React from "react";
import CommonNavbar from "../components/util/NavigationBar";

export default class Dashboard extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <>
            <CommonNavbar />
            <div className="row">
                <div className="col-lg-8"> Under construction</div>
                <div className="col-lg-4"> Team detail </div>
            </div>
            </>
        )
    }
}