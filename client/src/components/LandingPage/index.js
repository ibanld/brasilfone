import React, { useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { Button, Divider, Segment } from 'semantic-ui-react'

const style = {
    backgroundColor: '#17223B',
}

const LandingPage = () => {
    const [view, setView] = useState(true)

    return (
            <Segment raised centered style={style} color="black"> 
                    {view ? <LoginForm /> : <RegisterForm /> }
                <Divider />
                <Button 
                    color= { view ? 'orange' : 'purple' } 
                    content={ view ? 'Cadastre-se' : 'Faça seu Login' } 
                    onClick= { ()=> setView(!view) } 
                    fluid
                />
            </Segment>
    )
}

export default LandingPage