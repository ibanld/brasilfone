import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

function AuthRoute({ component: Component,  ...rest }) {
    const { isLogged } = useAuth()

    return (
        <Route {...rest} render={ (props) => (!isLogged ? <Redirect to='/' /> : <Component {...props} />)} />
    )
}
export default AuthRoute
