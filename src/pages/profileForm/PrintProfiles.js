import React from 'react'
import { connect } from 'react-redux'

let PrintProfiles = props => {
    const { profiles } = props
    console.log(profiles.profiles)

    return (
    <div>
        <h3>These are your profiles:</h3>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Role</th>
            </tr>
            </thead>
            <tbody>
            {profiles && profiles.profiles && profiles.profiles.map((profile, index) => (
                <tr key={index}>
                    <td>{profile.name}</td>
                    <td>{profile.phone}</td>
                    <td>{profile.role}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    )
}

PrintProfiles = connect(
    state => ({
        profiles: state.profiles.added_profiles
    }),
    {

    }
)(PrintProfiles)

export default PrintProfiles