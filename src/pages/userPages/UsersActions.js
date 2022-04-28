export const ADD_USER_INFO = 'ADD_USER_INFO'
export const ADD_USER_TO_LIST = 'ADD_USER_TO_LIST'
export const LOAD_INFO = 'LOAD_INFO'

export const addUserInfo = values => dispatch => {
    dispatch({
        type: ADD_USER_INFO,
        payload: values
    })
}

export const addUserToList = () => dispatch => {
    dispatch({
        type: ADD_USER_TO_LIST
    })
}

export const loadInfo = (data) => dispatch => {
    dispatch({
        type: LOAD_INFO,
        payload: data
    })
}