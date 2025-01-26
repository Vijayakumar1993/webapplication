import React from "react";
import { LOG_LEVEL } from "../../data/static";

export default function log(msg, level) {
    const log_class = LOG_LEVEL[level]
    const className = `alert alert-${log_class}`
    return (
        <div className={className} role="alert">
            {msg}
        </div>
    )
}