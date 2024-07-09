import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Data() {
    return (
        <div>
            <h2>Data Mahasiswa</h2>
            <ul>
                <li><Link to="mhs">Klik disini!!</Link></li>
            </ul>
            <Outlet />
        </div>
    );   
}

export default Data;