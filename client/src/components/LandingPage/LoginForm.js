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
            
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Form onSubmit={e => handleSubmit(e)}> 
            <Input type="email" name="email" icon="user outline" iconPosition="left"  value={loginForm.email} required inverted onChange={ e => handleChange(e) } />
            <Input type="password" name="password" icon="lock" iconPosition="left"  value={loginForm.password} required inverted onChange={ e => handleChange(e) } />
            <Button positive type='submit' icon="send" content="Façer Login" compact />
        </Form>
    )
}

export default LoginForm
