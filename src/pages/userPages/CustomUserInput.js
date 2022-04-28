import React, { Component } from 'react'
import { Field } from 'redux-form'

class CustomUserInput extends Component {
  render() {
    const { input: { name }, icon, meta: { touched, error, warning } } = this.props

    return (
      <div>
        <Field name={name} component='input' type='text' />
        {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
      </div>
    )
  }
}

export default CustomUserInput