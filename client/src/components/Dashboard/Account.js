import { useState, useEffect } from 'react'
import { Container, Statistic, Divider, Form, Input, Button } from 'semantic-ui-react'
import { useAuth } from '../../context/authContext'
import API from '../../utils/axios'

export default function Account() {
    const [passForm, setPassForm] = useState({
        action: 'UPDATE_PASSWORD',
        payload: {
            oldPassword: '',
            newPassword: ''
        }
    })
    const [user, setUser] = useState({})
    const { email, token } = useAuth()

    const handleChange = e => {
        setPassForm({
            ...passForm,
            payload: {
                ...passForm.payload,
                [e.target.name]:e.target.value
            }
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await API.put(`users/${user.id}`, passForm)
            if (res) {
                console.log(res.data)
            }
        } catch (err) {
            console.error(err)
        }
    }

    const getUser = async email => {
        const myUser = await API.get(`users/email/${email}`, {headers: {'x-auth-token': token}})
        if (myUser) {
            setUser({
                ...myUser.data
            })
        }
    }

    useEffect(() => {
        getUser(email)
    }, [])

    return (
        <Container text textAlign="center">
            {Object.keys(user).lenght < 0 ? 'Carregando...' : 
                <Statistic.Group size="mini" inverted text="center">
                    <Statistic>
                        <Statistic.Label>Seu Id: </Statistic.Label>
                        <Statistic.Value>{user.id}</Statistic.Value>
                    </Statistic>
                    <Statistic>
                        <Statistic.Label>E-Mail: </Statistic.Label>
                        <Statistic.Value>{email}</Statistic.Value>
                    </Statistic>
                    <Statistic>
                        <Statistic.Label>Data registro: </Statistic.Label>
                        <Statistic.Value>{user.createdAt}</Statistic.Value>
                    </Statistic>
                    <Statistic>
                        <Statistic.Label>Auth Token: </Statistic.Label>
                        <Statistic.Value>{`${token.substring(0,50)}...`}</Statistic.Value>
                    </Statistic>
                </Statistic.Group>
            }
            <Divider inverted />
            <Form onSubmit={ e => handleSubmit(e)}>
                <p>Atualizar Senha</p>
                <Form.Group>
                    <Input type="password" name="oldPassword" value={passForm.oldPassword} placeholder="Senha Atual" inverted  onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Input type="password" name="newPassword" value={passForm.newPassword} placeholder="Senha Nova" inverted  onChange={handleChange} />
                </Form.Group>
                <Button positive  type="submit" icon="send" content="Atualizar Senha" />
            </Form>
        </Container>
    )
}
