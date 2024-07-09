import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function About() {
    return (
        <div>
            <h2>About Page</h2>
            <ul>
                <li><Link to="team">Our Team</Link></li>
            </ul>
            <Outlet />
        </div>
    );   
}

export default About;