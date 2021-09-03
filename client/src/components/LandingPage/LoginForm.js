import { useState } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'
import { useAuth, useDispatchAuth } from '../../context/authContext'
import { useDispatchAlert } from '../../context/alertContext'
import {  Redirect } from 'react-router-dom'
import API from '../../utils/axios'

function LoginForm() {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const dispatchAuth = useDispatchAuth()
    const dispatchAlert = useDispatchAlert()
    const { isLogged } = useAuth()

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
                        dispatchAuth({
                            type: 'LOG_IN',
                            payload: {
                                email: loginForm.email,
                                token: setToken.data
                            }
                        })
                        dispatchAlert({
                            type: 'SHOW_ALERT',
                            payload: {
                                color: 'green',
                                icon: 'thumbs up',
                                header: 'Login realizado com sucesso!', 
                                content: `Oi! ${loginForm.email}, Tudo bem?`,
    
                            }
                        })
                        setTimeout( () => {
                            dispatchAlert({
                                type: 'HIDE_ALERT'
                            })
                        }, 3000)
                    }
                } else {
                    dispatchAlert({
                        type: 'SHOW_ALERT',
                        payload: {
                            color: 'red',
                            icon: 'thumbs down',
                            header: 'Algo não deu certo!', 
                            content: res.data.message,

                        }
                    })
                    setTimeout( () => {
                        dispatchAlert({
                            type: 'HIDE_ALERT'
                        })
                    }, 3000)
                }
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
        <Form onSubmit={e => handleSubmit(e)}> 
            <Form.Input>
                <Input type="email" name="email" icon="user" iconPosition="left" placeholder="E-Mail"  value={loginForm.email} required inverted onChange={ e => handleChange(e) } />
            </Form.Input>
            <Form.Input>
                <Input type="password" name="password" icon="lock" iconPosition="left" placeholder="Senha"  value={loginForm.password} required inverted onChange={ e => handleChange(e) } />
            </Form.Input>
                <Button positive fluid type='submit' icon="send" content="Fazer Login" compact />
        </Form>
        {isLogged && 
            <Redirect to="/dashboard" />
        }
        </>
    )
}

export default LoginForm
