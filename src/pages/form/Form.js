import React from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomInput from './CustomInput'
import CustomSelect from "./CustomSelect"
import { faAddressCard, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { maxLength15, required } from '../../util/validation'
import { Link } from 'react-router-dom'

let Form = props => {
  const { handleSubmit } = props
  return (
    <div>
    <form onSubmit={ handleSubmit }>
        <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component={CustomInput} icon={faAddressCard} validate={[required, maxLength15]} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component={CustomInput} icon={faUserAlt} validate={[required, maxLength15]} />
      </div>
      <div>
            <label>Favorite color</label>
            <Field name="favoriteColor" component={CustomSelect} validate={[required]} />
      </div>
      <button type="submit">Submit</button>
    </form>
    <br />
      <Link to='/profile'>Go to profile</Link>
      <br />
      <Link to='/counter'>Go to counter</Link>
      <br />
      <Link to='/initialValuesForm'>Go to form with initial values</Link>
      <br />
      <Link to='/profileForm'>Go to profile form with field arrays</Link>
    </div>
  )
}

Form = reduxForm({
  form: 'firstForm'
})(Form)

export default Form