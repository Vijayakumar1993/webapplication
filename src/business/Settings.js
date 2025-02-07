import React from "react";
import CommonNavbar from "../components/util/NavigationBar";
import Tabs from "../components/util/Tabs";
import Requests from '../business/Requests'

export default function Settings(){
    const tstin = [{
        id: "requests",
        name: "Requests",
        component:<Requests />
        
    },{
        id: "requests",
        name: "Requests",
        component:<Requests />
        
    }]
    return (
        <>
        <CommonNavbar />
        <Tabs fields={tstin} />
        </>
    )
}