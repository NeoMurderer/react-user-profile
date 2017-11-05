import React from 'react'

import User from '../model/user'

import Button from './button'

class UserProfile extends React.Component {
    constructor(props){
        super(props)
        const user = new User()
        this.state = { user }

        /* Em... */
        this.updateName = this.updateName.bind(this)
    }
    updateName() {
        this.state.user.name = 'Jerry'
        this.forceUpdate()     
    }
    render() {
        return (
            <div>
                <div className='profile'>
                    <div className='profile-image'><img src={this.state.user.image} alt={this.state.user.name}/></div>
                    <div className='profile-info'>
                        <h1 className='profile-name'>{this.state.user.name}</h1>
                        <p>{this.state.user.description}</p>
                    </div>
                </div>
                <Button onClick={this.updateName} />
            </div>
        )
    }
}
module.exports = UserProfile
