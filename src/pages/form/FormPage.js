import React from 'react'
import Form from './Form'

class FormPage extends React.Component {
  submit = (values) => {
    console.log(values)
  }

  render() {
    return (
      <Form onSubmit={this.submit} />
    )
  }
}

export default FormPage