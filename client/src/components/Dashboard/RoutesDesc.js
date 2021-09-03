import { useState } from 'react'
import { Header, Button } from 'semantic-ui-react'
import RoutesDocs  from './RoutesDocs'
import { Link } from 'react-router-dom'
import API from '../../utils/axios'
import { useAuth } from '../../context/authContext'

const container = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#263859'
}

export default function RouteDesc() {

    // Initial objects for requests to APIs
    const objects = {
        register: {
            email: "novousuario@usuarios.com.br",
            senha: "umasenhasegura" 
        },
        login: {
            email: "helloWorld@email.com",
            senha: "bomdia"
        },
        userId:{
            id: 1
        },
        update: {
            antigaSenha: 'bomdia',
            novaSenha: 'tudobem?'
        }
    }

    // Response States for every call to API
    const [registerRes, setRegisterRes] = useState('')
    const [loginRes, setLoginRes] = useState('')
    const [usersRes, setUsersRes] = useState('')
    const [userIdRes, setUserIdRes] = useState('')
    const [updateRes, setUpdateRes] = useState('')

    // Auth token from logged user for requests
    const { token } = useAuth()

    // Call to API routes for challenge requirements
        // Register User from Routes Docs
    const registerUser = async (toPost) => {
        const engForm = {
            email: toPost.email,
            password: toPost.senha
        }
        try {
            const res = await API.post('users/cadastre-se', engForm)
            if (res) {
                setRegisterRes(res.data.message)
                setTimeout( ()=> 
                    setRegisterRes('')
                , 6000)
            }
        } catch (err) {
            console.error(err)
        }
    }
        // Login User from Routes Docs
    const loginUser = async (toLogin) => {
        const engForm = {
            email: toLogin.email,
            password: toLogin.senha
        }
        try {
            const res = await API.post('users/login', engForm)
            if (res) {
                // If the API resolves TRUE we return 'true' else we return the message
                setLoginRes(res.data === true ? 'true' : res.data.message)
                setTimeout( ()=> {
                    setLoginRes('')
                }, 6000)
            }
        } catch (err) {
            console.error(err)
        }
    }
        // Get all users API call from Routes Docs
    const getUsers = async () => {
        try {
            const res = await API.get('users', {headers: {'x-auth-token': token}})
            if (res) {
                setUsersRes(JSON.stringify(res.data))
                setTimeout( ()=> {
                    setUsersRes('')
                }, 6000)
            }
        } catch (err) {
            console.error(err)
        }
    }
        // Get user email from ID API call from Routes Docs
    const getUserById = async (userId) => {
        const id = userId.id
        try {
            const res = await API.get(`users/${id}`, {headers: {'x-auth-token': token}})
            if (res) {
                setUserIdRes(res.data.message)
                setTimeout( ()=> 
                    setUserIdRes('')
                ,6000)
            }
        } catch (err) {
            console.error(err)
        }
    }
        // Update password API call from Routes Docs
    const updatePassword = async (toUpdate) => {
        try {
            // Build password object for the PUT request
            const updatePass = {
                type: 'UPDATE_PASSWORD',
                payload: {
                    oldPassword: toUpdate.antigaSenha,
                    newPassword: toUpdate.novaSenha
                } 
            }
            const res = await API.put('users/5', updatePass, {headers: {'x-auth-token': token}})
            if (res) {
                setUpdateRes(res.data.message)
                setTimeout( ()=> 
                    setUpdateRes('')
                , 6000)
            }
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div style={container}>
            <Header as="h2" inverted>Lista de Rotas</Header>
            <RoutesDocs
                action="POST"
                api="users/cadastre-se"
                title="Rota Cadastre-se"
                json={objects.register}
                handler={registerUser}
                res={registerRes}
            />
            <RoutesDocs
                action="POST"
                api="users/login"
                title="Rota Login"
                json={objects.login}
                handler={loginUser}
                res={loginRes}
            />
            <RoutesDocs
                action="GET"
                api="users"
                title="Rota Usuários Cadastrados"
                handler={getUsers}
                hiddeEditor
                res={usersRes}
                noAuthRoute
            />
            <RoutesDocs
                action="GET"
                api="users/1"
                title="Rota Pesquisar Usuário com ID"
                json={objects.userId}
                handler={getUserById}
                res={userIdRes}
                noAuthRoute
                hiddeEditor
            />
            <RoutesDocs
                action="PUT"
                api="users/5"
                title="Rota Atualizar Senha"
                handler={updatePassword}
                json={objects.update}
                res={updateRes}
                noAuthRoute
            />
            <Link to="/dashboard">
                <Button color="teal" icon="arrow left" content="Voltar" />
            </Link>
        </div>
    )
}
