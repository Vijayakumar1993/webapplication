import React from "react";
import CreateForm from "../components/util/Form.js";
import CommonNavbar from "../components/util/NavigationBar.js";
import Panel from "../components/util/Panel";
import Table from "../components/util/Table.js";
import Tabs from "../components/util/Tabs.js";
import { heading, rows } from "../data/sample";
import { CREATE_EVENT, SEARCH_TEAM } from "../data/static.js";
export default class Schedule extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const tstin = [{
            id: "createEvent",
            name: "Create Event",
            component: <CreateEvent />
        },{
            id: "searchEvent",
            name: "Search Event",
            component: <SearchEvent />
        },{
            id: "deleteEvent",
            name: "Delete Event",
            component: <DeleteEvent />
        }]

        return (<>
            <CommonNavbar> </CommonNavbar>
            <Tabs fields={tstin} />
        </>
        )
    }
}

function CreateEvent(props) {
    const createEvent = <CreateForm fields={CREATE_EVENT} />
    const heds = <>
        <h4>Create Event</h4>
    </>
    return (<div className="justify-content-center align-items-center vh-100">
        <Panel heading={heds} body={createEvent} />&nbsp;
    </div>
    )
}
function SearchEvent(props) {
    const searchEvent = <CreateForm fields={SEARCH_TEAM} />
    const heds = <>
        <h4>Search Event</h4>
    </>
    return (<div className="justify-content-center align-items-center vh-100">
        <Panel heading={heds} body={searchEvent} />&nbsp;
        <Table heading={heading} rows={rows} title="Customer Requests" />
    </div>
    )
}

function DeleteEvent(props) {
    const deleteEvent = <CreateForm fields={SEARCH_TEAM} />
    const heds = <>
        <h4>Delete Event</h4>
    </>
    return (<div className="justify-content-center align-items-center vh-100">
        <Panel heading={heds} body={deleteEvent} />&nbsp;
    </div>
    )
}