import React from 'react';
import logo from '../../assets/site_logo.png'
import { Link } from 'react-router-dom';

const DashboardHead = () => {
    return (
        <div className='w-full h-16 bg-black'>
            <div>
                <Link to={'/'} className='h-full w-1/3'>
                    <img className='h-full' src={logo} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default DashboardHead;