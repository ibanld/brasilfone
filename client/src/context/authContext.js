import { useReducer, useContext, createContext } from 'react'

const AuthStateContext = createContext()
const AuthDispatchContext = createContext()

const initialState = {
    email: '',
    id: '',
    createdAt: '',
    token: '',
    isLogged: false,
    loading: true
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'LOG_IN':
            return {
                ...state,
                email: payload.email,
                token: payload.token,
                isLogged: true,
                loading: false
            }
        case 'LOG_OUT':
        case 'ERROR': 
        case 'DELETE_ACCOUNT': 
            return initialState
    
        default:
            throw new Error(`Unknown action ${type}`)
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AuthDispatchContext.Provider value={dispatch}>
            <AuthStateContext.Provider value={state}>
                {children}
            </AuthStateContext.Provider>
        </AuthDispatchContext.Provider>
    )
}

export const useAuth = () => useContext(AuthStateContext)
export const useDispatchAuth = () => useContext(AuthDispatchContext)