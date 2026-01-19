import React from "react";
import "./nav.css";
import { useEffect } from "react";

function Navbar() {
    return(
        <>
        <div>
            <nav>
                <div className="icon">Icon</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Navbar;