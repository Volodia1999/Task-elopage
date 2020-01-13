import React from 'react';
import AccountsMenu from '../AccountsMenu/AccountsMenu';
import DetailsUsers from '../DetailsUsers/DetailsUsers';

const Details = () => {
    return (
        <div className='card'>
            <AccountsMenu/>
            <DetailsUsers/>
        </div>
    )
};

export default Details;
