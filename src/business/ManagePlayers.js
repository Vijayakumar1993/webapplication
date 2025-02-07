import React from "react";
import CreateForm from "../components/util/Form.js";
import CommonNavbar from "../components/util/NavigationBar.js";
import Panel from "../components/util/Panel";
import Table from "../components/util/Table.js";
import { heading, rows } from "../data/sample";
import { CREATE_TEAM, REGISTRATION } from "../data/static.js";
export default class ManagePlayer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const ManagePlayer = <CreateForm fields={REGISTRATION} />
        const heds = <>
            <h4>Create Player</h4>
        </>
        return (<>
            <CommonNavbar> </CommonNavbar>
            <div className="justify-content-center align-items-center vh-100">
                <Panel heading={heds} body={ManagePlayer} />&nbsp;
                <Table heading={heading} rows={rows} title="Players List" />
            </div>)
        </>
        )
    }
}