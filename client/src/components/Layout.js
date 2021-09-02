import { Menu, Icon } from 'semantic-ui-react'

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

export default function Layout({ children }) {
    return (
        <div style={style} >
            <Menu inverted style={menuStyle}>
                <Menu.Item>
                    <Icon name="js square"/>
                </Menu.Item>
                <Menu.Item>
                    Brasilfone - Challenge
                </Menu.Item>
            </Menu>
            <div style={childrenStyle}>
                { children }
            </div>
        </div>
    )
}
