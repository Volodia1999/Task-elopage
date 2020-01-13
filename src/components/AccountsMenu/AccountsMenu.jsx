import React from 'react';
import './AccountsMenu.css';
import {NavLink} from 'react-router-dom';

const accountItems = [
    {id: 1, url: '/overview', nameOfItem: 'Overview'},
    {id: 2, url: '/details', nameOfItem: 'Details'}
];

const AccountsMenu = () => {
    return (
        <>
            <div className='container'>
                Accounts
            </div>
            <div className='tab'>
                {accountItems.map(({id, url, nameOfItem}) => (
                    <React.Fragment key={id}>
                        <NavLink to={url} activeClassName='active' className='tab-links'>{nameOfItem}</NavLink>
                    </React.Fragment>
                ))}
            </div>
            <div className='border-for-menu' />
        </>
    )
};

export default AccountsMenu;
