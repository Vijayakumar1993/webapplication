import React from "react";
import CreateForm from "../components/util/Form.js";
import CommonNavbar from "../components/util/NavigationBar.js";
import Panel from "../components/util/Panel";
import Table from "../components/util/Table.js";
import { heading, rows } from "../data/sample";
import { CREATE_TEAM, REGISTRATION, SEARCH_TEAM } from "../data/static.js";
import Tabs from "../components/util/Tabs.js";
export default class CreateTeam extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const tstin = [{
            id: "createPlayer",
            name: "Create Player",
            component: <PlayerCreation />
        },{
            id: "searchPlayer",
            name: "Search Player",
            component: <PlayerSearch />
        },{
            id: "deleteTeam",
            name: "Delete Team",
            component: <PlayerDelete />
        }]

        return (<>
            <CommonNavbar> </CommonNavbar>
            <Tabs fields={tstin} />
        </>
        )
    }
}

function PlayerCreation(props) {
    const createPlayer = <CreateForm fields={REGISTRATION } />
    const heds = <>
        <h4>Create Player</h4>
    </>
    return (<div className="justify-content-center align-items-center vh-100">
        <Panel heading={heds} body={createPlayer} />&nbsp;
    </div>
    )
}
function PlayerSearch(props) {
    const searchPlayer = <CreateForm fields={SEARCH_TEAM} />
    const heds = <>
        <h4>Search Team</h4>
    </>
    return (<div className="justify-content-center align-items-center vh-100">
        <Panel heading={heds} body={searchPlayer} />&nbsp;
        <Table heading={heading} rows={rows} title="Players List" />
    </div>
    )
}

function PlayerDelete(props) {
    const deleltePlayer = <CreateForm fields={SEARCH_TEAM} />
    const heds = <>
        <h4>Delete Team</h4>
    </>
    return (<div className="justify-content-center align-items-center vh-100">
        <Panel heading={heds} body={deleltePlayer} />&nbsp;
    </div>
    )
}