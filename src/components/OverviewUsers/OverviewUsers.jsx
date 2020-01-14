import React from 'react';
import './OverviewUsers.css';
import {userAPI} from '../../userApi/userAPI';
import {withRouter} from 'react-router-dom';

const OverviewUsers = (props) => {

    const routeChange = () => {
        const urlDetails = '/details';
        props.history.push(urlDetails);
    };

    return (
        <div className='overview-user-cards'>
            {userAPI.map((user) => (
                <div className='overview-user-card' key={user.id}>
                    <div className='show-user-info'>
                        <div className='email'>
                            <p>Email:</p>
                            <span>{user.email}</span>
                        </div>
                        <div className='phone'>
                            <p>Phone:</p>
                            <span>{user.phone}</span>
                        </div>
                        <div className='details-user'>
                            <button onClick={routeChange}>Details</button>
                        </div>
                    </div>
                    <div className='overview-user-profile'>
                        <i className='fa fa-user user-icon' />
                    </div>
                    <div className='overview-user-container'>
                        {user.username}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default withRouter(OverviewUsers);
