import React, { Component } from 'react'
import { connect } from 'react-redux'

class ShowProfiles extends Component {
    render() {
        const { profiles } = this.props

        console.log(profiles)
        return (
            <div>
                <h2>List of profiles:</h2>
                <hr />
                {profiles.map((profile, i) => (
                    <div key={i}>
                        <p>Name: {profile.name}</p>
                        <p>Phone number: {profile.phoneNumber}</p>
                        <p>Email address: {profile.email}</p>
                        <hr />
                    </div>
                ))}
            </div>)
    }
}

export default connect(
    state => ({
      profiles: state.profile.profiles
    }),
    {
    }
  )(ShowProfiles)