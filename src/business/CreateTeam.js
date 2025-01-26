import React from "react";
import BarChart from "../components/util/Chart.js";
import CreateForm from "../components/util/Form";
import CommonNavbar from "../components/util/NavigationBar.js";
import { CREAT_TEAM } from '../data/static.js';
import { CHART_DATA } from '../data/static.js';

export default class CreateTeam extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const form = <CreateForm fields={CREAT_TEAM} />
        return (<>
            <CommonNavbar> </CommonNavbar>
            <div className="row">
                <BarChart options={CHART_DATA} />
            </div>
        </>
        )
    }
}