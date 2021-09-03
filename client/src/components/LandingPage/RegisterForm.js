import { useState } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import API from '../../utils/axios'
import checkPassword from '../../utils/checkPassword'
import { useDispatchAlert } from '../../context/alertContext'

function RegisterForm() {
    const [registerForm, setRegisterForm] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    })

    const dispatchAlert = useDispatchAlert()

    const handleChange = e => {
        setRegisterForm({
            ...registerForm, 
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const passwordChecked = checkPassword(registerForm.password, registerForm.repeatPassword)
            if (passwordChecked) {
                const res = await API.post('users/cadastre-se', registerForm)
                if (res) {
                    setRegisterForm({
                        email: '',
                        password: '',
                        repeatPassword: ''
                    })
                    dispatchAlert({
                        type: 'SHOW_ALERT',
                        payload: {
                            color: 'teal',
                            icon: 'info circle',
                            header: 'Cadastre-se', 
                            content: res.data.message,

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
                        icon: 'close',
                        header: 'Senha Errada!', 
                        content: 'As senhas não concordam',

                    }
                })
                setTimeout( () => {
                    dispatchAlert({
                        type: 'HIDE_ALERT'
                    })
                }, 3000)
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
