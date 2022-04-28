import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Field } from 'redux-form'

class CustomInput extends Component {
  render() {
    const { input: { name, value, onChange }, icon, meta: { touched, error, warning } } = this.props

    return (
      <div>
        <FontAwesomeIcon icon={icon} />
        {/* <input type='text' onChange={(event) => onChange(event.target.value)} /> */}
        <Field name={name} component='input' type='text' />
        {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
      </div>
    )
  }
}

export default CustomInput