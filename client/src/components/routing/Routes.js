import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthRoute from './AuthRoute'
import LandingPage from '../LandingPage'
import Dashboard from '../Dashboard'

function Routes() {
    return (
        <>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <AuthRoute exact path='/dashboard' component={Dashboard} />
        </Switch>
        </>
    )
}

export default Routes
