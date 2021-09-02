import { useState } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'

function LoginForm() {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {
        setLoginForm({
            ...loginForm,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            console.log(loginForm)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Form onSubmit={e => handleSubmit(e)}> 
            <Form.Input>
                <Input type="email" name="email" icon="user" iconPosition="left" placeholder="E-Mail"  value={loginForm.email} required inverted onChange={ e => handleChange(e) } />
            </Form.Input>
            <Form.Input>
                <Input type="password" name="password" icon="lock" iconPosition="left" placeholder="Senha"  value={loginForm.password} required inverted onChange={ e => handleChange(e) } />
            </Form.Input>
                <Button positive fluid type='submit' icon="send" content="Façer Login" compact />
        </Form>
    )
}

export default LoginForm
