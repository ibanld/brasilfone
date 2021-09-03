import { useState, useEffect } from 'react'
import { Container, Statistic, Form, Input, Button, Header, Grid } from 'semantic-ui-react'
import { useAuth, useDispatchAuth } from '../../context/authContext'
import { Link, Redirect } from 'react-router-dom'
import Moment from 'react-moment'
import API from '../../utils/axios'
import { useDispatchAlert } from '../../context/alertContext'
import checkPassword from '../../utils/checkPassword'

export default function Account() {
    const [passForm, setPassForm] = useState({
        type: 'UPDATE_PASSWORD',
        payload: {
            oldPassword: '',
            newPassword: '',
            newPassword2:''
        }
    })
    const [user, setUser] = useState({})

    const { email, token, isLogged } = useAuth()
    const dispatchAlert = useDispatchAlert()
    const dispatchAuth = useDispatchAuth()

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
                    dispatchAlert({
                    type: 'SHOW_ALERT',
                    payload: {
                        color: 'teal',
                        icon: 'info circle',
                        header: 'Mudar Senha', 
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
                        content: 'As senhas nao concordam',

                    }
                })
                setTimeout( () => {
                    dispatchAlert({
                        type: 'HIDE_ALERT'
                    })
                }, 3000)
            }
        } catch (err) {
            console.error(err)
        }
    }

    const handleDelete = async () => {
        try {
            const res = await API.delete(`users/${user.id}`, {headers: {'x-auth-token': token}})
            if (res) {
                dispatchAlert({
                    type: 'SHOW_ALERT',
                    payload: {
                        color: 'red',
                        icon: 'close',
                        header: 'Atençao!', 
                        content: 'A sua conta foi Excluida!',

                    }
                })
                setTimeout( () => {
                    dispatchAlert({
                        type: 'HIDE_ALERT'
                    })
                    dispatchAuth({
                        type: 'LOG_OUT'
                    })
                }, 3000)

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
        let isSubscribed = true
        if (isSubscribed) {
            getUser(email)
        }
        return () => isSubscribed = false
    }, [])

    return (
        <Container fluid textAlign="center">
            <Grid inverted centered textAlign="center" celled="internally" columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        {Object.keys(user).length < 0 ? 'Carregando...' : 
                            <Statistic.Group size="mini" inverted text="center" horizontal>
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
                                    <Statistic.Value>
                                        <Link to="/dashboard">
                                            <Button color="teal" compact icon="arrow left" content="Voltar" />
                                        </Link>
                                    </Statistic.Value>
                                </Statistic>
                            </Statistic.Group>
                        }
                    </Grid.Column>
                    <Grid.Column>
                        <Form onSubmit={ e => handleSubmit(e)}>
                            <Header inverted>Atualizar Senha</Header>
                            <Form.Group>
                                <Input label="Senha" type="password" name="oldPassword" value={passForm.oldPassword} placeholder="Senha Atual" inverted  onChange={handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Input type="password" icon="lock" iconPosition="left" name="newPassword" value={passForm.newPassword} placeholder="Senha Nova" inverted  onChange={handleChange} />
                                <Input type="password" icon="lock open" iconPosition="left" name="newPassword2" value={passForm.newPassword2} placeholder="Repetir Senha Nova" inverted  onChange={handleChange} />
                            </Form.Group>
                            <Button positive type="submit" icon="send" content="Atualizar Senha" />
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        <Header inverted>Excluir Conta</Header>
                        <Button negative fluid icon="trash" content="Exlcuir Conta" onClick={handleDelete} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            {!isLogged && <Redirect to="/" />}
        </Container>
    )
}
