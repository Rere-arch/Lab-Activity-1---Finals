import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return(
        <nav>
            <Link to="/About">About</Link> ||{''}
            <Link to="/personalinfo">Personal Information</Link> ||{''}
            <Link to="/skills">Skills</Link> ||{''}
        </nav>
    );
};

export default Navigation;
