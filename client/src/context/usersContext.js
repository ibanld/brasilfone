import { useReducer, useContext, createContext } from 'react'

const UsersStateContext = createContext()
const UsersDispatchContext = createContext()

const initialState = {
    users: [],
    loading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case 'ADD_USER': 
            state.users.push(action.payload)
            const addedUser = state.users
            return {
                ...state,
                loading: false,
                user: addedUser
            }
        case 'DELETE_USER': 
            const removeUser = state.users.filter( user => user._id !== action.payload)
            return {
                ...state,
                loading: false,
                users: removeUser
            }
        default:
            throw new Error(`Unknown action: ${action.type}`)
    }
}

export const UsersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <UsersDispatchContext.Provider value={dispatch}>
            <UsersStateContext.Provider value={state}>
                {children}
            </UsersStateContext.Provider>
        </UsersDispatchContext.Provider>
    )
}

export const useUsers = () => useContext(UsersStateContext)
export const useDispatchUsers = () => useContext(UsersDispatchContext)