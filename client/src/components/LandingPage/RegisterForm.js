import { useState } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import API from '../../utils/axios'

function RegisterForm() {
    const [registerForm, setRegisterForm] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    })

    const handleChange = e => {
        setRegisterForm({
            ...registerForm, 
            [e.target.name]: e.target.value
        })
    }
    const checkPassword = (pass1, pass2) => {
        if (pass1 === pass2) {
            return true
        } else {
            return false
        }
    }
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const passwordChecked = checkPassword(registerForm.password, registerForm.repeatPassword)
            if (passwordChecked) {
                const res = await API.post('users/cadastre-se', registerForm)
                if (res) {
                    console.log(res.data)
                    setRegisterForm({
                        email: '',
                        password: '',
                        repeatPassword: ''
                    })
                }
            } else {
                console.log('Passwords dont match')
            }
        } catch (error) {
            
        }
    }

    return (
        <Form onSubmit={ e => handleSubmit(e)}>
            <Form.Input>
                <Input type="email" name="email" icon="user" placeholder="E-Mail" value={registerForm.email} inverted onChange={ e => handleChange(e) } />
            </Form.Input>
            <Form.Input>
                <Input type="password" name="password" icon="lock open" placeholder="Senha" value={registerForm.password} inverted onChange={ e => handleChange(e) } />
            </Form.Input>
            <Form.Input>
                <Input type="password" name="repeatPassword" icon="lock" placeholder="Repita a Senha" value={registerForm.repeatPassword} inverted onChange={ e => handleChange(e) } />
            </Form.Input>
            <Button positive type="submit" icon="save" content="Cadastre-se!" fluid compact/>
        </Form>
    )
}

export default RegisterForm
