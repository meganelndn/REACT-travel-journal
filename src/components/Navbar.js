import React from "react";
import earth from "../images/earth-icon.png";

export default function Navbar() {
    return (
        <nav>
            <img src={earth} className="nav--icon" />
            <h6 className="nav--title">my travel journal.</h6>
        </nav>
    )
}