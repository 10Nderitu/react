import React from 'react';
import logo from '../images/logo.jpeg'

function Org() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src={logo} alt="Organization Logo" />
            <p className="text-xl font-semibold">Organization Name</p>

        </div>
    );
}

export default Org;
