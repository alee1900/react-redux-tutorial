import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { Link } from 'react-router-dom'
import { load } from './AccountActions'
import { connect } from 'react-redux'
// import { data } from './InitialValuesFormPage'

let InitialValuesForm = props => {
  const { handleSubmit, alreadyHaveAccount, username } = props
  return (
    <div>
    <form onSubmit={ handleSubmit }>
        {/* <button type='button' onClick={() => load(data)}>Use existing account</button> */}
        <div>
            <label htmlFor="name">Name</label>
            <Field name='name' component='input' type='text' placeholder='name' />
        </div>
        <div>
            <label htmlFor="phone">Phone</label>
            <Field name='phone' component='input' type='text' placeholder='phone' />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <Field name='email' component='input' type='email' placeholder='email' />
        </div>
        <div>
            <label htmlFor='alreadyHaveAccount'>Already have account?</label>
            <Field name='alreadyHaveAccount' component='input' type='checkbox' />
        </div>
        {alreadyHaveAccount ? <div>
            <label htmlFor='username'>Username</label>
            <Field name='username' component='input' type='text' placeholder='username' />
        </div> : null}
        <button type="submit">Submit</button>
        <br />
    </form>
    <br />
      <Link to='/profile'>Go to profile</Link>
      <br />
      <Link to='/counter'>Go to counter</Link>
      <br />
      <Link to='/form'>Go to form</Link>
      <br />
      <Link to='/profileForm'>Go to profile form with field arrays</Link>
    </div>
  )
}

InitialValuesForm = reduxForm({
    form: 'initialValuesForm',
    // enableReinitialize: true
})(InitialValuesForm)

InitialValuesForm = connect(
    state => ({
      initialValues: state.account,
    }),
    { load }
  )(InitialValuesForm)

const selector = formValueSelector('initialValuesForm')
InitialValuesForm = connect(state => {
    const { alreadyHaveAccount, username } = selector(state, 'alreadyHaveAccount', 'username')
        return {
          alreadyHaveAccount, 
          username
        }
})(InitialValuesForm)

export default InitialValuesForm