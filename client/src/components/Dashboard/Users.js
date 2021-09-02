import { useEffect } from 'react'
import { useUsers, useDispatchUsers } from '../../context/usersContext'
import { useAuth } from '../../context/authContext'
import API from '../../utils/axios'
import { Container, Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { useDispatchAlert } from '../../context/alertContext'

const tableColor= {
    backgroundColor: '#17223B'
}

export default function Users() {

    const { users, loading } = useUsers()
    const { token } = useAuth()

    const dispatchUsers = useDispatchUsers()
    const dispatchAlert = useDispatchAlert()

    const loadUsers = async () => {
        try {
            const res = await API.get('users', {headers: {'x-auth-token': token}})
            if (res) {
                dispatchUsers({
                    type: 'LOAD_USERS',
                    payload: res.data
                })
            }
        } catch (err) {
            console.error(err)
        }
    }

    const handleDelete = async id => {
        try {
            const res = await API.delete(`users/${id}`, {headers: {'x-auth-token': token}})
            if (res) {
                dispatchUsers({
                    type: 'DELETE_USER',
                    payload: id
                })
                dispatchAlert({
                    type: 'SHOW_ALERT',
                    payload: {
                        color: 'red',
                        icon: 'trash',
                        header: 'Usuário Excluido!', 
                        content: 'O usuário foi exlcuido',

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
    useEffect( ()=> {
        let isSubscribed = true
        if (isSubscribed) {
            loadUsers()
        }

        return () => isSubscribed = false
    }, [])

    return (
        <Container text>
            {loading ? 'loading' : 
                <Table inverted style={tableColor}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>E-Mail</Table.HeaderCell>
                            <Table.HeaderCell>REGISTRO</Table.HeaderCell>
                            <Table.HeaderCell>EXCLUIR</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {users.reverse().map( user => 
                            <Table.Row key={user.id}>
                                <Table.Cell>{user.id}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>
                                    <Moment format="DD/MM/YYYY">{user.createdAt}</Moment>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button negative icon="trash" onClick={ ()=> handleDelete(user.id)} />
                                </Table.Cell>
                            </Table.Row>    
                        )}
                    </Table.Body>
                </Table>
            }
            <Link to="/dashboard">
                <Button color="teal" compact icon="arrow left" float="left" content="Voltar" />
            </Link>
        </Container>
    )
}
