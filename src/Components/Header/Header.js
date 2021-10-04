import './Header.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <nav className="bg-black p-3 text-center">
                <NavLink className="link" to="/Home">Home</NavLink>

                <NavLink className="link" to="/Courses">Courses</NavLink>

                <NavLink className="link" to="/Instractor">Instractor</NavLink>

                <NavLink className="link" to="/About">About</NavLink>
            </nav>


        </div>
    );
};

export default Header;