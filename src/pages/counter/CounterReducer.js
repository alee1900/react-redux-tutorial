import { INCREMENT_FAIL, INCREMENT_START, INCREMENT_SUCCESS } from './CounterActions'

const INITIAL_STATE = {
  currentCounter: 0,
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_START:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case INCREMENT_SUCCESS:
      return {
        ...state,
        currentCounter: state.currentCounter + action.payload,
        loading: false
      }

    case INCREMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}
