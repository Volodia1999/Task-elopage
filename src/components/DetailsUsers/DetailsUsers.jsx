import React from 'react';
import {userAPI} from '../../userApi/userAPI';
import uuid from 'uuid';
import './DetailsUsers.css';

class DetailsUsers extends React.PureComponent {
    state = {
        users: [...userAPI],
        showTooltip: false,
        isOpen: false,
        userName: '',
        userEmail: '',
        userPhone: ''
    };

    changeColorInfo = () => {
        this.setState({
            showTooltip: !this.state.showTooltip
        })
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    closeModal = () => {
        this.setState({
            isOpen: false
        })
    };

    setName = (e) => {
        this.setState({
            userName: e.target.value
        })
    };

    setEmail = (e) => {
        this.setState({
            userEmail: e.target.value
        })
    };

    setPhone = (e) => {
        this.setState({
            userPhone: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();

        const newAccount = {
            id: uuid(),
            username: this.state.userName,
            email: this.state.userEmail,
            phone: this.state.userPhone
        };

        this.setState({
            users: [...this.state.users, newAccount]
        });

        this.closeModal();
    };

    render() {
        return (
            <>
                <div className='user-list'>
                    <p>LIST<i onClick={this.changeColorInfo}
                              className={!this.state.showTooltip
                                  ? 'fa fa-info-circle info-icon fa-lg'
                                  : 'fa fa-info-circle fa-lg color-info-icon'}/>
                        {this.state.showTooltip && <span className='tooltip-icon'><i>Account list</i></span>}
                    </p>
                </div>
                <div className='details-user-cards'>
                    {this.state.users.map((user) => (
                        <div className='details-user-card' key={user.id}>
                            <div className='details-user-container'>
                                <div className='details-user-name'>{user.username}</div>
                                <div className='details-user-email'>Email: <span>{user.email}</span></div>
                                <div className='details-user-phone'>Phone: <span>{user.phone}</span></div>
                                <i onClick={() => {
                                    this.setState({
                                        users: this.state.users.filter((u) => u.id !== user.id)
                                    })
                                }} className='fa fa-trash-o delete-icon fa-lg'/>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='add-account'>
                    <button onClick={this.toggle}><i className='fa fa-plus-circle fa-lg add-icon'/>Add
                        account
                    </button>
                </div>

                {this.state.isOpen &&
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={this.closeModal}>&times;</span>
                        <form className='add-user' onSubmit={this.onSubmit}>
                            <span className='mt-3'>Username</span>
                            <input
                                type='text'
                                placeholder='Your name...'
                                name='name'
                                onChange={this.setName} required/>
                            <span className='mt-3'>Email</span>
                            <input
                                type='email'
                                placeholder='Your email...'
                                name='useremail'
                                onChange={this.setEmail} required/>
                            <span className='mt-3'>Phone</span>
                            <input
                                type='text'
                                placeholder='Your phone...'
                                name='userphone'
                                onChange={this.setPhone}/>
                            <div className='forms-button'>
                                <div>
                                    <button onClick={this.closeModal} className='cancel-button'>Cancel</button>
                                </div>
                                <div>
                                    <button className='add-new-account'>Add new account</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                }
            </>
        )
    }
}

export default DetailsUsers;
