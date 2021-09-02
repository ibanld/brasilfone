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

    const { email, token } = useAuth()
    const id = 2
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
            const res = await API.put(`users/${id}`, passForm)
            if (res) {
                console.log(res.data)
            }
        } catch (err) {
            console.error(err)
        }
    }

    const getUser = async email => {
        const myUser = await API.get(`users/email/${email}`)
        if (myUser) {
            console.log(myUser.data)
            return myUser.data
        }
    }

    useEffect(() => {
        getUser(email)
    }, [email])

    return (
        <Container text textAlign="center">
            <Statistic.Group size="mini" inverted horizontal text="center">
                <Statistic>
                    <Statistic.Label>E-Mail: </Statistic.Label>
                    <Statistic.Value>{email}</Statistic.Value>
                </Statistic>
                <Statistic>
                    <Statistic.Label>Auth Token: </Statistic.Label>
                    <Statistic.Value>{`${token.substring(0,65)}...`}</Statistic.Value>
                </Statistic>
            </Statistic.Group>
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
