import React from "react";
import CreateForm from "../components/util/Form.js";
import CommonNavbar from "../components/util/NavigationBar.js";
import Panel from "../components/util/Panel";
import Table from "../components/util/Table.js";
import { heading, rows } from "../data/sample";
import { CREATE_TEAM, SEARCH_TEAM } from "../data/static.js";
import Tabs from "../components/util/Tabs.js";
export default class CreateTeam extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const tstin = [{
            id: "createTeam",
            name: "Create Team",
            component: <TeamCreation />
        },{
            id: "searchTeam",
            name: "Search Team",
            component: <TeamSearch />
        },{
            id: "deleteTeam",
            name: "Delete Team",
            component: <TeamDelete />
        }]

        return (<>
            <CommonNavbar> </CommonNavbar>
            <Tabs fields={tstin} />
        </>
        )
    }
}

function TeamCreation(props) {
    const createTeam = <CreateForm fields={CREATE_TEAM} />
    const heds = <>
        <h4>Create Team</h4>
    </>
    return (<div className="justify-content-center align-items-center vh-100">
        <Panel heading={heds} body={createTeam} />&nbsp;
        <Table heading={heading} rows={rows} title="Customer Requests" />
    </div>
    )
}
function TeamSearch(props) {
    const searchTeam = <CreateForm fields={SEARCH_TEAM} />
    const heds = <>
        <h4>Search Team</h4>
    </>
    return (<div className="justify-content-center align-items-center vh-100">
        <Panel heading={heds} body={searchTeam} />&nbsp;
        <Table heading={heading} rows={rows} title="Customer Requests" />
    </div>
    )
}

function TeamDelete(props) {
    const deleteTeam = <CreateForm fields={SEARCH_TEAM} />
    const heds = <>
        <h4>Delete Team</h4>
    </>
    return (<div className="justify-content-center align-items-center vh-100">
        <Panel heading={heds} body={deleteTeam} />&nbsp;
        <Table heading={heading} rows={rows} title="Customer Requests" />
    </div>
    )
}