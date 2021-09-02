import { useState } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'
import API from '../../utils/axios'

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
            const res = await API.post('users/login', loginForm)
            if (res) {
                if (res.data === true) {
                    const setToken = await API.post('auth', { email: loginForm.email })
                    if (setToken) {
                        console.log(setToken.data)
                        setLoginForm({
                            email: '',
                            password: ''
                        })
                    }
                } else {
                    console.log(res.data.message)
                }
            }
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
