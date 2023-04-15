import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <nav className="d-flex navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white " to="/"> <h4 >Daily NEWS</h4>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <li className="nav-item">

                            <Link className="nav-Link active text-white" aria-current="page" to="/general">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link active text-white" aria-current="page" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link active text-white" aria-current="page" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link active text-white" aria-current="page" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link active text-white" aria-current="page" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link active text-white" aria-current="page" to="/technology">Technology</Link>
                        </li>

                    </div>
                </div>
            </nav>
        </div>
    );
};