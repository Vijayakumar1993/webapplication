import React from "react";
import CreateForm from "../components/util/Form";
import { CREAT_TEAM } from '../data/static.js'
import CommonNavbar from "../components/util/NavigationBar.js";

export default class CreateTeam extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<>
            <CommonNavbar> </CommonNavbar>
            <div className="row">
                <CreateForm fields={CREAT_TEAM} />
            </div>
        </>
        )
    }
}