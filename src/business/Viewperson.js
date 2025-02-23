import React from "react";
import { useParams } from "react-router-dom";
import CreateForm from "../components/util/Form";
import Panel from "../components/util/Panel";
import { PERSON } from "../data/static";
import CommonNavbar from "../components/util/NavigationBar";

export default function ViewPerson(props) {

    const { value } = useParams();
    const registration = <CreateForm fields={PERSON} />
    const heading = <>
        <h4>Account #{value} Detail</h4>
    </>
    return (
        <>
        <CommonNavbar />
            <div className="justify-content-center align-items-center vh-100">
                <Panel heading={heading} body={registration} />
            </div>
        </>)

}