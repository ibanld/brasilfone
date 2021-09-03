import React, { useState, useEffect } from 'react'
import { Label, Button, Divider, Header, Segment } from 'semantic-ui-react'
import { JsonEditor as Editor } from 'jsoneditor-react'
import API from '../../utils/axios'
import 'jsoneditor-react/es/editor.min.css'

// Labels for different CRUD operations
function Get() {
    return (
        <Label color="green" content="GET" />
    )
}
function Post() {
    return (
        <Label color="yellow" content="POST" />
    )
}
function Put() {
    return (
        <Label color="blue" content="PUT" />
    )
}
function Delete() {
    return (
        <Label color="red" content="DELETE" />
    )
}

// CSS Styles 
const routeDesc = {
    backgroundColor: '#17223B',
    width: '50%', 
}

const editor = {
    backgroundColor: '#17223B' 
}

const apiText = {
    paddingLeft: 25
}
// This Component will render the Route information with testing options
//  Custom Component to handle different CRUD operations (More info in Documents section)
export default function RoutesDocs({ action, api, title, json, handler, res, hiddeEditor, noAuthRoute }) {
    const [toAPI, setToApi] = useState(json)
    const [noTokenRes, setNoTokenRes] = useState('')
    
    // Unathenticated route to API for all routes without token
    const noTokenAPI = async () => {
        try {
            const res = await API.get('users')
            if (res) {
                setNoTokenRes(res.data.message)
                setTimeout( ()=>
                    setNoTokenRes('')
                ,3000)
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div style={routeDesc}>
            <Header as="h3" inverted>{title}</Header>
            <Segment>
                <Segment.Inline>
                    {action === 'GET' && <Get />}
                    {action === 'POST' && <Post />}
                    {action === 'PUT' && <Put />}
                    {action === 'DELETE' && <Delete />}
                    <span style={apiText}>{`http://localhost:5000/api/${api}`}</span>
                </Segment.Inline>
            </Segment>
            <Segment inverted style={editor}>
                {!hiddeEditor && 
                    <Editor 
                        value={toAPI}
                        onChange={setToApi}
                    />
                }
                <Button positive content="Testar" onClick={ () => handler(toAPI)} />
                {noAuthRoute &&
                    <Button negative content="Rota sem Segurar" onClick={noTokenAPI} />
                }
            </Segment>
            <Segment>
                <strong>Resposta do Servidor: </strong>
                {res}{noTokenRes}
            </Segment>
            <Divider />
        </div>
    )
}





