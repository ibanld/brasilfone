import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthRoute from './AuthRoute'
import LandingPage from '../LandingPage'
import Dashboard from '../Dashboard'
import Account from '../Dashboard/Account'
import Users from '../Dashboard/Users'
import RoutesDesc from '../Dashboard/RoutesDesc'
import Guide from '../Dashboard/Guide'

function Routes() {
    return (
        <>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <AuthRoute exact path='/dashboard' component={Dashboard} />
            <AuthRoute exact path="/dashboard/account" component={Account} />
                <AuthRoute exact path="/dashboard/users" component={Users} />
                <AuthRoute exact path="/dashboard/routes" component={RoutesDesc} />
                <AuthRoute exact path="/dashboard/guide" component={Guide} />
        </Switch>
        </>
    )
}

export default Routes
