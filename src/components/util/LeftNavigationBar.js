import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY, SUB_MENUS } from "../../data/static.js";

export default function LeftNavigationBar() {
    const menus = SUB_MENUS[useLocation().pathname] || [];
    console.log(`actual mesnu ${menus}`)
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <>
            {menus.length > 0 && (
                <div
                    className="offcanvas offcanvas-start bg-dark text-white"
                    tabIndex="-1"
                    id="sidebar"
                    data-bs-scroll="true"
                    data-bs-backdrop="true"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title">{COMPANY.name}</h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="nav flex-column">
                            {menus.map((item, index) => (
                                <li className="nav-item" key={index}>
                                    {item.submenu ? (
                                        <div className="dropdown">
                                            <button
                                                className="nav-link dropdown-toggle btn btn-link text-white"
                                                onClick={() => toggleDropdown(index)}
                                                data-bs-toggle="dropdown"
                                                aria-expanded={openDropdown === index ? "true" : "false"}
                                            >
                                                {item.name}
                                            </button>
                                            <ul
                                                className={`dropdown-menu ${openDropdown === index ? "show" : ""}`}
                                            >
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link className="dropdown-item" to={subItem.link}>
                                                            {subItem.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <Link className="nav-link text-white" to={item.link}>
                                            {item.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}