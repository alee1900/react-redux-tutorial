import { 
    UPDATE_NAME, 
    UPDATE_PHONE, 
    UPDATE_EMAIL, 
    ADD_PROFILE 
} from "./ProfileActions";

const INITIAL = {
    name: '',
    phoneNumber: '',
    email: '',
    profiles: []
}

export default (state = INITIAL, action) => {
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload,
            }

        case UPDATE_PHONE:
            return {
                ...state,
                phoneNumber: action.payload,
            }

        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload
            }

        case ADD_PROFILE:
            return {
                ...state,
                name: INITIAL.name,
                phoneNumber: INITIAL.phoneNumber,
                email: INITIAL.email,
                profiles: state.profiles.concat({
                    name: state.name, 
                    phoneNumber: state.phoneNumber, 
                    email: state.email})
            }

        default:
            return state
    }
}