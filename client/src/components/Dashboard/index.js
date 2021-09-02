import React from 'react'
import { Link } from 'react-router-dom'
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
    )
}

export default Dashboard
