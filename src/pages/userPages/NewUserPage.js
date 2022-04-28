import React from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form'
import { connect } from 'react-redux'
import { 
  addUserInfo, 
  loadInfo, 
} from './UsersActions'
import CustomUserInput from './CustomUserInput'
import { required, maxLength30, phoneNumber, maxLength10 } from '../../util/validation'

class NewUserPage extends React.Component {
  renderPeriodAndDetails = ({ fields, meta: { touched, error, submitFailed } }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>Add</button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      </li>
      {fields.map((item, index) => (
        <li key={index} style={{marginBottom: '15px'}}>
          <div>
            <Field
              name={`${item}.period`}
              type="text"
              component='input'
              placeholder='period'
            />
          </div>
          <div>
            <Field
              name={`${item}.details`}
              type="text"
              component='textarea'
              placeholder='details'
            />
          </div>
        </li>
      ))}
    </ul>
  )

  submit = (values) => {
    console.log(values)
    this.props.addUserInfo(values)
    this.props.history.push('/hire')
  }

  componentDidMount() {
    this.props.loadInfo(this.props.user)
  }

  render() {
    const { handleSubmit } = this.props
    const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]
    const months = ['january', 'february', 'march', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

    return (
        <div>
            <form onSubmit={handleSubmit(this.submit)}>
                <div>
                    <label htmlFor='userName'>Name</label>
                    <Field name='userName' component={CustomUserInput} placeholder='name' validate={[required, maxLength30]} />
                </div>
                <div>
                    <label htmlFor='userEmail'>Email</label>
                    <Field name='userEmail' component={CustomUserInput} type='email' placeholder='email' validate={[required]} />
                </div>
                <div>
                    <label htmlFor='userPhone'>Phone number</label>
                    <Field name='userPhone' component={CustomUserInput} type='text' placeholder='phone number' validate={[required, maxLength10, phoneNumber]} />
                </div>
                <div>
                    <label htmlFor='userHireYear'>Hire year</label>
                    <Field name='userHireYear' component='select'>
                        <option value=''></option>
                        {years.map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                        ))}
                    </Field>
                </div>
                <div>
                    <label htmlFor='userHireMonth'>Hire month</label>
                    <Field name='userHireMonth' component='select'>
                        <option value=''></option>
                        {months.map((month, index) => (
                            <option key={index} value={month}>{month}</option>
                        ))}
                    </Field>
                </div>
                <div>
                    <label htmlFor='userStudies'>Studies:</label>
                    <FieldArray name='userStudies' component={this.renderPeriodAndDetails} />
                </div>
                <div>
                    <label htmlFor='userExperience'>Experience:</label>
                    <FieldArray name='userExperience' component={this.renderPeriodAndDetails} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
  }
}

NewUserPage = reduxForm({
  form: 'userForm'
})(NewUserPage)

NewUserPage = connect(
  state => ({
    initialValues: state.users,
  }),
  {
      loadInfo
  }
)(NewUserPage)

NewUserPage = connect(
  state => ({
      user: state.users
  }),
  {
      addUserInfo,
      loadInfo,
  }
)(NewUserPage)

export default NewUserPage