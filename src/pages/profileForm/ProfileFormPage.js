import React from 'react'
import PrintProfiles from './PrintProfiles'
import ProfileForm from './ProfileForm'
import { connect } from 'react-redux'
import { updateProfiles } from './ProfilesActions'

class ProfileFormPage extends React.Component {
  submit = (values) => {
    console.log(values)
    this.props.updateProfiles(values)
  }

  render() {
    return (
        <div>
            <ProfileForm onSubmit={this.submit} />
            <PrintProfiles />
        </div>
    )
  }
}

ProfileFormPage = connect(
    state => ({
        profiles: state.profiles.added_profiles
    }),
    {
        updateProfiles
    }
)(ProfileFormPage)

export default ProfileFormPage