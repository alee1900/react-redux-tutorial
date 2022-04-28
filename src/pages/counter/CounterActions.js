export const INCREMENT_START = 'INCREMENT_START'
export const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS'
export const INCREMENT_FAIL = 'INCREMENT_FAIL'

export const incrementByValue = ({ value }) => dispatch => {
  console.log('Incrementing with', value)
  dispatch({ type: INCREMENT_START })
  try {
    if (value % 5 === 0) {
      throw new Error('Unable to increment by multiple of 5')
    } else {
      // simulate request
      setTimeout(() => {
        dispatch({
          type: INCREMENT_SUCCESS,
          payload: value
        })
      }, 1500)
    }
  } catch (e) {
    dispatch({
      type: INCREMENT_FAIL,
      error: e.toString()
    })
  }
}
