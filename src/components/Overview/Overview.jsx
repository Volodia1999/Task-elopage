import React from 'react';
import './Overview.css';
import OverviewUsers from '../OverviewUsers/OverviewUsers';
import AccountsMenu from '../AccountsMenu/AccountsMenu';

const Overview = () => {
    return (
        <div className='card'>
            <AccountsMenu/>
            <OverviewUsers/>
        </div>
    )
};

export default Overview;
