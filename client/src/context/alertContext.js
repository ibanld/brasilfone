import { useReducer, useContext, createContext } from 'react'

const AlertStateContext = createContext()
const AlertDispatchContext = createContext()

const initialState = {
    showMe: false,
    icon: '',
    header: '',
    content: '',
    color: 'blue'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HIDE_ALERT':
            return {
                ...initialState,
                showMe: false
            }
        case 'SHOW_ALERT': 
            return {
                ...state,
                showMe: true, 
                icon: action.payload.icon,
                header: action.payload.header,
                content: action.payload.content,
                color: action.payload.color
            }
    
        default:
            throw new Error(`Unknown action: ${action.type}`)
    }
}

export const AlertProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AlertDispatchContext.Provider value={dispatch}>
            <AlertStateContext.Provider value={state}>
                {children}
            </AlertStateContext.Provider>
        </AlertDispatchContext.Provider>
    )
}

export const useAlert = () => useContext(AlertStateContext)
export const useDispatchAlert = () => useContext(AlertDispatchContext)