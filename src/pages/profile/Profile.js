import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateText, addProfile } from './ProfileActions'
import ShowProfiles from './ShowProfiles'
import './Profile.scss'

class Profile extends Component {
    updateMe = (event, type) => {
        this.props.updateText({ value: event.target.value, field: type })
    }

    addMe = (event) => {
      this.props.addProfile()
    }

    render() {
        const { name, phoneNumber, email } = this.props

        console.log(name, phoneNumber, email)
        return (
            <div className='profilePage'>
              <div className='form'>
                My name is {name}
                <br/>
                <input type='text' placeholder='name' onChange={(event) => this.updateMe(event, 'name')} value={name} />
                <br />
                My phone number is {phoneNumber}
                <br />
                <input type='text' placeholder='phone number' onChange={(event) => this.updateMe(event, 'phone')} value={phoneNumber} />
                <br />
                My email is {email}
                <br />
                <input type='text' placeholder='email' onChange={(event) => this.updateMe(event, 'email')} value={email} />
                <br />
                <button type='submit' onClick={(event) => this.addMe(event)}>Add profile</button>
                <br />
                <Link to='/'>Go to counter</Link>
                <br />
                <Link to='/form'>Go to form</Link>
                <br />
                <Link to='/initialValuesForm'>Go to form with initial values</Link>
                <br />
                <Link to='/profileForm'>Go to profile form with field arrays</Link>
              </div>
              <div>
                <ShowProfiles />
              </div>
            </div>)
    }
}

export default connect(
    state => ({
      name: state.profile.name,
      phoneNumber: state.profile.phoneNumber,
      email: state.profile.email
    }),
    {
      updateText,
      addProfile
    }
  )(Profile)