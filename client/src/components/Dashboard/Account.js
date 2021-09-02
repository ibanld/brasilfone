import { useState, useEffect } from 'react'
import { Container, Statistic, Divider, Form, Input, Button, Header } from 'semantic-ui-react'
import { useAuth } from '../../context/authContext'
import Moment from 'react-moment'
import API from '../../utils/axios'
import checkPassword from '../../utils/checkPassword'

export default function Account() {
    const [passForm, setPassForm] = useState({
        action: 'UPDATE_PASSWORD',
        payload: {
            oldPassword: '',
            newPassword: '',
            newPassword2:''
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
            const areEqual = checkPassword(passForm.payload.newPassword, passForm.payload.newPassword2)
            if (areEqual) {
                const res = await API.put(`users/${user.id}`, passForm, {headers: {'x-auth-token': token}})
                if (res) {
                    console.log(res.data)
                }
            } else {
                console.log('Passwords dont match')
            }
        } catch (err) {
            console.error(err)
        }
    }

    const handleDelete = async () => {
        try {
            const res = await API.delete(`users/${user.id}`, {headers: {'x-auth-token': token}})
            if (res) {
                console.log(res.data.message)
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
            {Object.keys(user).length < 0 ? 'Carregando...' : 
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
                        <Statistic.Value><Moment format="DD/MM/YYYY">{user.createdAt}</Moment></Statistic.Value>
                    </Statistic>
                    <Statistic>
                        <Statistic.Label>Auth Token: </Statistic.Label>
                        <Statistic.Value>{`${token.substring(0,50)}...`}</Statistic.Value>
                    </Statistic>
                </Statistic.Group>
            }
            <Divider inverted />
            <Form onSubmit={ e => handleSubmit(e)}>
                <Header inverted>Atualizar Senha</Header>
                <Form.Group>
                    <Input type="password" name="oldPassword" value={passForm.oldPassword} placeholder="Senha Atual" inverted  onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Input type="password" name="newPassword" value={passForm.newPassword} placeholder="Senha Nova" inverted  onChange={handleChange} />
                    <Input type="password" name="newPassword2" value={passForm.newPassword2} placeholder="Repetir Senha Nova" inverted  onChange={handleChange} />
                </Form.Group>
                <Button positive type="submit" icon="send" content="Atualizar Senha" />
            </Form>
            <Divider inverted />
            <Header inverted>Excluir Conta</Header>
            <Button negative fluid icon="trash" content="Exlcuir Conta" onClick={handleDelete} />
        </Container>
    )
}
