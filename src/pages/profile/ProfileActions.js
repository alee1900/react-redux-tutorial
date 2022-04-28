export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_PHONE = 'UPDATE_PHONE'
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const ADD_PROFILE = 'ADD_PROFILE'

export const updateText = ({ value, field }) => dispatch => {
    console.log('New input text: ', value)
    switch (field) {
        case 'name':
            dispatch({ 
                type: UPDATE_NAME, 
                payload: value
            })
            break
        
        case 'phone':
            dispatch({
                type: UPDATE_PHONE,
                payload: value
            })
            break

        case 'email':
            dispatch({
                type: UPDATE_EMAIL,
                payload: value
            })
            break

        default:
            return
    }
}

export const addProfile = () => dispatch => {
    dispatch({ type: ADD_PROFILE })
}