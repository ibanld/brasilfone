import React from 'react'
import { Switch, BrowserRouter as Router, Link } from 'react-router-dom'
import AuthRoute from '../routing/AuthRoute'
import Account from './Account'
import Users from './Users'
import RoutesDesc from './RoutesDesc'
import Guide from './Guide'
import { Segment, Icon, Header } from 'semantic-ui-react'

const container = {
    display: 'flex',
    width: '100%',
    heigth: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'baseline'
}
const style = {
    backgroundColor: '#17223B'
}

function Dashboard() {
    return (
        <Router>
            <div style={container}>
                <Segment placeholder raised color="green" padded size="huge" textAlign="center" style={style}>
                    <Link to="/dashboard/account">
                        <Header icon>
                            <Icon name="settings" color="green" size="huge" />
                            <p style={{color: 'white'}}>Gerenciar Conta</p>
                        </Header>
                    </Link>
                </Segment>
                <Segment placeholder raised color="teal" padded size="huge" textAlign="center" style={style}>
                    <Link to="/dashboard/users">
                        <Header icon>
                            <Icon name="users" color="teal" size="huge" />
                            <p style={{color: 'white'}}>Gerenciar Usuários</p>
                        </Header>  
                    </Link>
                </Segment>
                <Segment placeholder raised color="orange" padded size="huge" textAlign="center" style={style}>
                    <Link to="/dashboard/routes">
                        <Header icon>
                            <Icon name="sitemap" color="orange" size="huge" />
                            <p style={{color: 'white'}}>Rotas da API</p>
                        </Header>
                    </Link>
                </Segment>
                <Segment placeholder raised color="purple" padded size="huge" textAlign="center" style={style}>
                    <Link to="/dashboard/guide">
                        <Header icon>
                            <Icon name="file alternate" color="purple" size="huge" />
                            <p style={{color: 'white'}}>Documentaçao do App</p>  
                        </Header> 
                    </Link>
                </Segment>
            </div>
            <Switch>
                <AuthRoute exact path="/dashboard/account" component={Account} />
                <AuthRoute exact path="/dashboard/users" component={Users} />
                <AuthRoute exact path="/dashboard/routes" component={RoutesDesc} />
                <AuthRoute exact path="/dashboard/guide" component={Guide} />
            </Switch>
        </Router>
    )
}

export default Dashboard
