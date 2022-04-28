import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import CounterReducer from '../pages/counter/CounterReducer'
import ProfileReducer from '../pages/profile/ProfileReducer'
import { reducer as FormReducer } from 'redux-form'
import account from '../pages/initialValuesForm/AccountReducer'
import ProfilesReducer from '../pages/profileForm/ProfilesReducer'
import UsersReducer from '../pages/userPages/UsersReducer'

const rootReducer = combineReducers({
  routing,
  counter: CounterReducer,
  profile: ProfileReducer,
  form: FormReducer,
  initialValuesForm: FormReducer,
  account: account,
  profileForm: FormReducer,
  profiles: ProfilesReducer,
  userForm: FormReducer,
  users: UsersReducer
})

export default rootReducer
