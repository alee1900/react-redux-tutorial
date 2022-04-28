import { UPDATE_PROFILES } from './ProfilesActions'

const initial_state = {
    added_profiles: []
}

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case UPDATE_PROFILES:
            return {
                ...state,
                added_profiles: action.payload
            }
        
        default:
            return state
    }
}

export default reducer