import React, { Component } from 'react'
import { Field } from 'redux-form'

class CustomSelect extends Component {
  render() {
    const { input: { name, value, onChange }, meta: { touched, error, warning } } = this.props

    return (
      <div>
        <Field name={name} component="select">
            <option value=""></option>
            <option value="#ff0000">Red</option>
            <option value="#00ff00">Green</option>
            <option value="#0000ff">Blue</option>
        </Field>
        {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
      </div>
    )
  }
}

export default CustomSelect