import { 
    ADD_USER_INFO, 
    ADD_USER_TO_LIST,
    LOAD_INFO
} from './UsersActions'

const initial_state = {
    userName: '',
    userEmail: '',
    userPhone: '',
    userHireYear: '',
    userHireMonth: '',
    userStudies: [],
    userExperience: [],
    allUsers: []
}

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_USER_INFO:
            return {
                ...state,
                userName: action.payload.userName,
                userEmail: action.payload.userEmail,
                userPhone: action.payload.userPhone,
                userHireYear: action.payload.userHireYear,
                userHireMonth: action.payload.userHireMonth,
                userStudies: action.payload.userStudies,
                userExperience: action.payload.userExperience,
            }

        case ADD_USER_TO_LIST:
            return {
                ...state,
                userName: '',
                userEmail: '',
                userPhone: '',
                userHireYear: '',
                userHireMonth: '',
                userStudies: [],
                userExperience: [],
                allUsers: state.allUsers.concat({
                    userName: state.userName,
                    userEmail: state.userEmail,
                    userPhone: state.userPhone,
                    userHireYear: state.userHireYear,
                    userHireMonth: state.userHireMonth,
                    userStudies: state.userStudies,
                    userExperience: state.userExperience,
                })
            }

        case LOAD_INFO:
            return {
                ...action.payload
            }

        default:
            return state
    }
}

export default reducer