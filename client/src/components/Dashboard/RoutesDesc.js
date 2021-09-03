import { Header, Button, Card, Form } from 'semantic-ui-react'
import RoutesDocs  from './RoutesDocs'
import { Link } from 'react-router-dom'

const container = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

export default function RouteDesc() {

    const registerUser = async (toPost) => {
        try {
            console.log(toPost)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div style={container}>
            <Header as="h2" inverted>Lista de Rotas</Header>
            <RoutesDocs
                action="POST"
                api="users"
                title="Rota Cadastre-se"
                handler={registerUser}
            />
                
            <Link to="/dashboard">
                <Button color="teal" icon="arrow left" content="Voltar" />
            </Link>
        </div>
    )
}
