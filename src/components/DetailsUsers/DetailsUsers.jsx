import React, {useState} from 'react';
import {userAPI} from '../../userApi/userAPI';
import uuid from 'uuid';
import './DetailsUsers.css';

const DetailsUsers = () => {
    const [getUsers, changeGetUsers] = useState(userAPI);
    const [infoIcon, changeInfoIcon] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [currentUserName, setUserName] = useState('');
    const [currentUserEmail, setUserEmail] = useState('');
    const [currentUserPhone, setUserPhone] = useState('');

    const setName = (e) => {
        setUserName(e.target.value);
    };

    const setEmail = (e) => {
        setUserEmail(e.target.value);
    };

    const setPhone = (e) => {
        setUserPhone(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newAccount = {
            id: uuid(),
            username: currentUserName,
            email: currentUserEmail,
            phone: currentUserPhone
        };

        changeGetUsers([...getUsers, newAccount]);
        setIsOpen(false);
    };

    return (
        <>
            <div className='user-list'>
                <p>LIST<i onClick={() => changeInfoIcon(!infoIcon)}
                          className={!infoIcon
                              ? 'fa fa-info-circle info-icon fa-lg'
                              : 'fa fa-info-circle fa-lg color-icon'}/>
                    {infoIcon && <span className='tooltip-icon'><i>Account list</i></span>}
                </p>
            </div>
            <div className='details-user-cards'>
                {getUsers.map((user) => (
                    <div className='details-user-card' key={user.id}>
                        <div className='details-user-container'>
                            <div className='details-user-name'>{user.username}</div>
                            <div className='details-user-email'>Email: <span>{user.email}</span></div>
                            <div className='details-user-phone'>Phone: <span>{user.phone}</span></div>
                            <i onClick={() => {
                                changeGetUsers(getUsers.filter((u) => u.id !== user.id))
                            }} className='fa fa-trash-o delete-icon fa-lg'/>
                        </div>
                    </div>
                ))}
            </div>
            <div className='add-account'>
                <button onClick={() => setIsOpen(!isOpen)}><i className='fa fa-plus-circle fa-lg add-icon'/>Add account
                </button>
            </div>

            {isOpen &&
            <div className='modal'>
                <div className='modal-content'>
                    <span className='close' onClick={() => setIsOpen(false)}>&times;</span>
                    <form className='add-user' onSubmit={onSubmit}>
                        <span className='mt-3'>Username</span>
                        <input
                            type='text'
                            placeholder='Your name...'
                            onChange={setName} required/>
                        <span className='mt-3'>Email</span>
                        <input
                            type='email'
                            placeholder='Your email...'
                            onChange={setEmail} required/>
                        <span className='mt-3'>Phone</span>
                        <input
                            type='text'
                            placeholder='Your phone...'
                            onChange={setPhone}/>
                        <div className='w-100'>
                            <button className='add-new-account'>Add new account</button>
                            <button onClick={() => setIsOpen(false)} className='cancel-button'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            }
        </>
    )
};

export default DetailsUsers;
