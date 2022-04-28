import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { incrementByValue } from './CounterActions'

class Counter extends Component {
  // eslint-disable-next-line no-undef
  incrementMe = (event) => {
    this.props.incrementByValue({ value: Math.floor(Math.random() * 6) })
  }

  render () {
    const { currentCounter, loading, error } = this.props
    // console.log(currentCounter, loading, error)
    if (loading === true) {
      return (<div>Loading...</div>)
    }
    return (<div>
      My counter is {currentCounter}
      {error !== '' && (<p>Got error: {error}</p>)}
      <br/>
      <button onClick={this.incrementMe}>Increment Me!</button>
      <br />
      <Link to='/profile'>Go to profile</Link>
      <br />
      <Link to='/form'>Go to form</Link>
      <br />
      <Link to='/initialValuesForm'>Go to form with initial values</Link>
      <br />
      <Link to='/profileForm'>Go to profile form with field arrays</Link>
    </div>)
  }
}

export default connect(
  state => ({
    currentCounter: state.counter.currentCounter,
    loading: state.counter.loading,
    error: state.counter.error
  }),
  {
    incrementByValue
  }
)(Counter)
