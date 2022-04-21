import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>this is header</h1>
            <Link to={'/home'}>Home: </Link>
            <Link to={'/addUser'}>Add User </Link>
        </div>
    );
};

export default Header;