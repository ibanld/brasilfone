import React, { useState } from 'react'
import { Label, Button, Divider, Header, Segment } from 'semantic-ui-react'
import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'

// Labels for different CRUD operations
function Get() {
    return (
        <Label positive content="GET" />
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
        <Label negative content="DELETE" />
    )
}

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
// This Component will render the desired Route
//  It receives the type of operaion (GET, POST, PUT, DELETED), the address to the API, a title and the function to handle the submit
export default function RoutesDocs({ action, api, title, handler }) {
    const [toAPI, setToApi] = useState({
        email: "helloWorld@email.com",
        password: "myregularpassword" 
})

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
                <Editor 
                    value={toAPI}
                    onChange={setToApi}
                />
                <Button positive content="Testar" onClick={ () => handler(toAPI)} />
            </Segment>
            <Divider />
        </div>
    )
}





