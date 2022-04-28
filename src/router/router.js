import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../store/configureStore'
import { withLocalize } from 'react-localize-redux'
import { renderToStaticMarkup } from 'react-dom/server'
import Counter from '../pages/counter/Counter'
import Profile from '../pages/profile/Profile'
import FormPage from '../pages/form/FormPage'
import InitialValuesFormPage from '../pages/initialValuesForm/InitialValuesFormPage'
import ProfileForm from '../pages/profileForm/ProfileFormPage'
import NewUserPage from '../pages/userPages/NewUserPage'
import HireUserPage from '../pages/userPages/HireUserPage'
import ListUsersPage from '../pages/userPages/ListUsersPage'

class MainRouter extends Component {
  constructor (props) {
    super(props)

    this.props.initialize({
      options: { renderToStaticMarkup }
    })
  }

  render () {
    console.log('rounter')
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={'/'} component={Counter}/>
          <Route path={'/profile'} component={Profile} />
          <Route path={'/form'} component={FormPage} />
          <Route path={'/initialValuesForm'} component={InitialValuesFormPage} />
          <Route path={'/profileForm'} component={ProfileForm} />
          <Route path={'/new'} component={NewUserPage} />
          <Route path={'/hire'} component={HireUserPage} />
          <Route path={'/list'} component={ListUsersPage} />
          <Route component={() => <div>404 not found</div>}/>
        </Switch>
      </ConnectedRouter>)
  }

}

const mapStateToProps = state => {
  return {}
}
export default withLocalize(connect(mapStateToProps)(MainRouter))
