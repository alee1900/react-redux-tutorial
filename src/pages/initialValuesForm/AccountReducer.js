import { LOAD, UPDATE } from './AccountActions'

export const data = {
    name: 'Alecsandra',
    phone: '0722197757',
    email: 'test@test.com',
    alreadyHaveAccount: false,
    username: '',
    modified: false
}

const reducer = (state = data, action) => {
    switch (action.type) {
        case LOAD:
            return {
                ...action.data
            }
    
        case UPDATE:
            if(action.values.alreadyHaveAccount === false) {
                return {
                    ...state,
                    name: action.values.name,
                    phone: action.values.phone,
                    email: action.values.email,
                    alreadyHaveAccount: action.values.alreadyHaveAccount,
                    username: '',
                    modified: true,
                }
            }
            return {
                ...state,
                name: action.values.name,
                phone: action.values.phone,
                email: action.values.email,
                alreadyHaveAccount: action.values.alreadyHaveAccount,
                username: action.values.username,
                modified: true,
            }

        default:
            return state
    }
  }

export default reducer