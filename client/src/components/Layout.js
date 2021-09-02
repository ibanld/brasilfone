import { Menu, Button, Icon } from 'semantic-ui-react'
import { useAuth, useDispatchAuth } from '../context/authContext'
import Alert from './Alert'

const style = {
    backgroundColor: '#263859', 
    width: '100vw',
    height: '100vh'
}

const childrenStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
}
const menuStyle = {
    backgroundColor: '#17223B'
}

const alertDiv = {
    position: 'absolute',
    width: '100%',
    bottom: 1
}
export default function Layout({ children }) {
    const { isLogged } = useAuth()
    const dispatchAuth = useDispatchAuth()

    const logOut = () => {
        dispatchAuth({ type: 'LOG_OUT' })
    }

    return (
        <div style={style} >
            <Menu inverted style={menuStyle}>
                <Menu.Item>
                    <Icon name="js square"/>
                </Menu.Item>
                <Menu.Item>
                    Brasilfone - Challenge
                </Menu.Item>
                {isLogged && 
                    <Menu.Item>
                        <Button icon="sign-out" content="Fechar" inverted compact onClick={logOut} />
                    </Menu.Item>
                }
            </Menu>
            <div style={childrenStyle}>
                { children }
            </div>
            <div style={alertDiv}>
                <Alert />
            </div>
        </div>
    )
}
