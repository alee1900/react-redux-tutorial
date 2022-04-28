import React from 'react'
import InitialValuesForm from './InitialValuesForm'
import { load, update } from './AccountActions'
import { connect } from 'react-redux'
import { data } from './AccountReducer'
import { formValueSelector } from 'redux-form'

class InitialValuesFormPage extends React.Component {
  submit = (values) => {
    this.props.update(values)
  }

  componentDidMount() {
    this.props.load(this.props.accountValues)
  }

  render() {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <InitialValuesForm onSubmit={this.submit} />
            <div>
                <h3>Your account:</h3>
                <p>name: {this.props.accountInfo.name}</p>
                <p>phone number: {this.props.accountInfo.phone}</p>
                <p>email address: {this.props.accountInfo.email}</p>
                {this.props.accountInfo.alreadyHaveAccount ? <p>username: {this.props.accountInfo.username}</p> : null}
            </div>
        </div>
    )
  }
}

InitialValuesFormPage = connect(
    state => ({
        accountValues: state.account
    }),
    { 
        load,
        update
    }
  )(InitialValuesFormPage)

const selector = formValueSelector('initialValuesForm')
InitialValuesFormPage = connect(state => {
    const { name, phone, email, alreadyHaveAccount, username } = selector(state, 'name', 'phone', 'email', 'alreadyHaveAccount', 'username')
        return {
          accountInfo: { 
              name: name, 
              phone: phone, 
              email: email, 
              alreadyHaveAccount: alreadyHaveAccount, 
              username: username
            }
        }
})(InitialValuesFormPage)

export default InitialValuesFormPage