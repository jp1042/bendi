import React from 'react';
import { Link } from "react-router-dom";

import './nav.scss';

const Nav = ({ cities }) => (
    <>
        <h1>High-rise Cities!</h1>
        <nav>
            <ul>
                {cities && Object.keys(cities[0]).map((key) =>
                    <li key={key}>
                        <Link to={`/${key}`}>{key}</Link>
                    </li>
                )}
            </ul>
        </nav>
    </>
)

export default Nav;