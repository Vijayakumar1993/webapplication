import React from "react";
import Table from "../components/util/Table";
import { heading, rows } from "../data/sample";

export default function Requests() {
    const handleSubmit = (event) =>{
       alert("options ready to move..!"+event.target.value)
    }
   
    return (
        <>
            <Table heading={heading} rows={rows} handleSubmit={handleSubmit} title="Customer Requests"/>
        </>
    );
}
