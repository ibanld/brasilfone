import { Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const sidebar = {
    backgroundColor: '#17223B'
}

export default function SideMenu() {
    return (
        <Menu vertical inverted style={sidebar}>
                <Menu.Item>
                    <Menu.Header>Sobre o App</Menu.Header>
                        <Menu.Menu>
                            <Menu.Item
                                name="Stack"
                                link
                                href="#stack"
                            />
                            <Menu.Item
                                name="Pacotes NPM"
                                link
                                href="#packages"
                            />
                            <Menu.Item 
                                name="Repositório em Github"
                                link
                                href="#repo"
                            />
                        </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Começando</Menu.Header>
                        <Menu.Menu>
                            <Menu.Item
                                name="Comprobando Node"
                                link
                                href="#node"
                            />
                            <Menu.Item
                                name="Baixar Repositório e Instalar"
                                link
                                href="#install"
                            />
                            <Menu.Item
                                name="Conectar com Banco de Dados"
                                link
                                href="#connect"
                            />
                            <Menu.Item
                                name="Iniciar Servidor e Cliente"
                                link
                                href="#starting"
                            />
                        </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Rotas</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            name="Rotas Públicas"
                            link
                            href="#public"
                        />
                        <Menu.Item 
                            name="Rotas Privadas"
                            link
                            href="#private"
                        />
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Modelo de Desenvolvimento</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            name="Design de Backend"
                            link
                            href="#backend"
                        />
                        <Menu.Item
                            name="Design de Frontend"
                            link
                            href="#frotend"
                        />
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/dashboard">
                        <Button color="teal" icon="arrow left" content="Voltar" />
                    </Link>
                </Menu.Item>
            </Menu>
    )
}
