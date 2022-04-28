import React from 'react'
import { 
    Field, 
    reduxForm, 
    FieldArray
} from 'redux-form'
import { Link } from 'react-router-dom'

const renderField = ({ input, label, type }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
      </div>
    </div>
);

const renderProfiles = ({ fields, meta: { touched, error, submitFailed } }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>Add Profile</button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      </li>
      {fields.map((profile, index) => (
        <li key={index} style={{marginBottom: '15px'}}>
          <button
            type="button"
            title="Remove Member"
            onClick={() => fields.remove(index)}
          >Delete profile</button>
          <h4>Profile #{index + 1}</h4>
          <Field
            name={`${profile}.name`}
            type="text"
            component={renderField}
            label="Name"
          />
          <Field
            name={`${profile}.phone`}
            type="text"
            component={renderField}
            label="Phone"
          />
          <label htmlFor={`${profile}.role`}>Role</label>
          <br />
          <Field name={`${profile}.role`} component='select'>
            <option value=""></option>
            <option value="Friend">Friend</option>
            <option value="Colegue">Colegue</option>
            <option value="Family">Family</option>
          </Field>
        </li>
      ))}
    </ul>
);

let ProfileForm = props => {
  const { handleSubmit } = props
  return (
    <div>
    <form onSubmit={ handleSubmit }>
      <FieldArray name='profiles' component={renderProfiles} />
      <button type="submit">Submit</button>
    </form>
    <br />
      <Link to='/profile'>Go to profile</Link>
      <br />
      <Link to='/counter'>Go to counter</Link>
      <br />
      <Link to='/form'>Go to form</Link>
      <br />
      <Link to='/initialValuesForm'>Go to form with initial values</Link>
    </div>
  )
}

ProfileForm = reduxForm({
  form: 'profileForm'
})(ProfileForm)

export default ProfileForm