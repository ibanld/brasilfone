import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function AuthRoute({ component: Component,  ...rest }) {
    
    return (
        <Route {...rest} render={ (props) => ('ADD CONDITION' ? <Redirect to='/' /> : <Component {...props} />)} />
    )
}
export default AuthRoute
