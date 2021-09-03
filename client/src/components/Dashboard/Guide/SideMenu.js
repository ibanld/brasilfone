import { Menu } from 'semantic-ui-react'

export default function SideMenu() {
    return (
        <Menu vertical inverted>
                <Menu.Item>
                    <Menu.Header>Sobre o App</Menu.Header>
                        <Menu.Menu>
                            <Menu.Item
                                name="Stack"
                            />
                            <Menu.Item
                                name=""
                            />
                        </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Começando</Menu.Header>
                        <Menu.Menu>
                            <Menu.Item
                                name=""
                            />
                            <Menu.Item
                                name=""
                            />
                        </Menu.Menu>
                </Menu.Item>
            </Menu>
    )
}
