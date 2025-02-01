import React from "react";
import {Log, LogInfo, LogWarning} from "../components/util/Alerts.js";
import CommonNavbar from "../components/util/NavigationBar.js";

export default class CreateTeam extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<>
            <CommonNavbar> </CommonNavbar>
            <LogWarning msg="welcome"/>
        </>
        )
    }
}