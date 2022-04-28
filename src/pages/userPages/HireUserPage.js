import React from 'react'
import { addUserToList } from './UsersActions'
import { connect } from 'react-redux'

class HireUserPage extends React.Component {
    editButtonPress = () => {
        this.props.history.push('/new')
    }

    saveButtonPress = () => {
        this.props.addUserToList()
        this.props.history.push('/list')
    }

    render() {
        const { user } = this.props
        return (
            <div>
                <div>
                    <h2>Your user information:</h2>
                    <p>Name: <b>{user.userName}</b></p>
                    <p>Email: <b>{user.userEmail}</b></p>
                    <p>Phone: <b>{user.userPhone}</b></p>
                    <p>Hire year: <b>{user.userHireYear}</b></p>
                    <p>Hire month: <b>{user.userHireMonth}</b></p>
                    {user.userStudies && <p>Studies:</p>}
                    <ul>
                        {user.userStudies && user.userStudies.map((study, index) => (
                            <div key={index}>
                                <p>Period: <b>{study.period}</b></p>
                                <p>Details: <b>{study.details}</b></p>
                            </div>))}
                    </ul>
                    {user.userExperience && <p>Experience:</p>}
                    <ul>
                        {user.userExperience && user.userExperience.map((experience, index) => (
                            <li key={index}>
                                <p>Period: <b>{experience.period}</b></p>
                                <p>Details: <b>{experience.details}</b></p>
                            </li>))}
                    </ul>
                </div>
                <button onClick={this.editButtonPress}>Edit</button>
                <button onClick={this.saveButtonPress}>Save</button>
            </div>
        )
    }
}

HireUserPage = connect(
    state => ({
        user: state.users
    }),
    {
        addUserToList
    }
)(HireUserPage)

export default HireUserPage