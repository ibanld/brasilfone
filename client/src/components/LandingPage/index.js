import { useState } from 'react'
import Layout from '../Layout'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { Modal, Button, Divider } from 'semantic-ui-react'

function LandingPage() {
    const [view, setView] = useState(true)

    return (
        <Layout>
            <Modal>
                <Modal.Header></Modal.Header>
                <Modal.Content>
                    {view ? <LoginForm /> : <RegisterForm /> }
                </Modal.Content>
                <Divider />
                <Modal.Actions>
                <Button 
                    color= { view ? 'orange' : 'purple' } 
                    content={ view ? 'Cadastre-Se' : 'Faça seu Login' } 
                    onClick= { ()=> setView(!view) } 
                />
                </Modal.Actions>
            </Modal>
        </Layout>
    )
}

export default LandingPage
