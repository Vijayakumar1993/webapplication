import React from "react";
import { PAGE_FOOTER_MSG } from "../../data/static.js";


export default function Footer(){
    return (
        <div className=" page-bottom fw-bold">
            {PAGE_FOOTER_MSG || ""}
        </div>
    )
}