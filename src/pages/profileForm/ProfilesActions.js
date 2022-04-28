export const UPDATE_PROFILES = 'UPDATE_PROFILES'

export const updateProfiles = values => dispatch => {
    dispatch({
        type: UPDATE_PROFILES,
        payload: values
    })
}