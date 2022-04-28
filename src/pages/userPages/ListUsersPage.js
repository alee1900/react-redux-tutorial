import React from 'react'
import { connect } from 'react-redux'

class ListUsersPage extends React.Component {
    addAnotherUser = () => {
        this.props.history.push('/new')
    }

    render() {
        const { allUsers } = this.props

        return (
            <div>
                <h3>These are the users:</h3>
                <table style={{width: '100%', textAlign: 'center'}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Hire Year</th>
                            <th>Hire Month</th>
                            <th>Studies</th>
                            <th>Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers && allUsers.map((user, index) => (
                        <tr key={index}>
                            <td>{user.userName ? user.userName : '-'}</td>
                            <td>{user.userEmail ? user.userEmail : '-'}</td>
                            <td>{user.userPhone ? user.userPhone : '-'}</td>
                            <td>{user.userHireYear ? user.userHireYear : '-'}</td>
                            <td>{user.userHireMonth ? user.userHireMonth : '-'}</td>
                            <td>{user.userStudies ? user.userStudies.map((study, index) => (
                                <div key={index}>
                                    <p>{study.period}</p>
                                    <p>{study.details}</p>
                                    <hr />
                                </div>
                            )) : '-'}</td>
                            <td>{user.userExperience ? user.userExperience.map((experience, index) => (
                                <div key={index}>
                                    <p>{experience.period}</p>
                                    <p>{experience.details}</p>
                                    <hr />
                                </div>
                            )) : '-'}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={this.addAnotherUser}>Add another user</button>
            </div>
        )
    }
}

ListUsersPage = connect(
    state => ({
        allUsers: state.users.allUsers
    }),
    {
        
    }
)(ListUsersPage)

export default ListUsersPage