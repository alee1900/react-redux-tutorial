export const LOAD = 'LOAD'
export const UPDATE = 'UPDATE'

export const load = data => dispatch => {
  dispatch({
    type: LOAD, 
    data: data
  })
}

export const update = values => dispatch => {
  dispatch({
    type: UPDATE,
    values: values
  })
}