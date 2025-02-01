import React, { useEffect, useState } from "react";

export function Log({ msg, level }) {
    const className = `static alert alert-${level}`

    const [show, setShow] = useState(true)
    useEffect(()=>{
        const timer= setTimeout(()=>{
            setShow(false)
        },3000)

        return ()=>clearTimeout(timer)
    })
    return (
        <>
            {show &&
                <div className={className} role="alert">
                    {msg}
                </div>}
        </>
    )
}

export function LogInfo({ msg }) {
    return (
        <Log msg={msg} level="primary" />
    )
}

export function LogWarning({ msg }) {
    return (
        <Log msg={msg} level="warning" />
    )
}

export function LogError({ msg }) {
    return (
        <Log msg={msg} level="danger" />
    )
}

export function LogFatal({ msg }) {
    return (
        <Log msg={msg} level="danger" />
    )
}

export function LogSucess({ msg }) {
    return (
        <Log msg={msg} level="primary" />
    )
}