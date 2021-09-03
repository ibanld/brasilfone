import { Header, Divider, List, Icon} from 'semantic-ui-react'

export default function About() {
    return (
        <div>
            <Header inverted as="h2">Sobre o App</Header>
            <Divider inverted />
            <Header inverted as="h3" id="stack">Stack</Header>
                Este aplicativo foi desenvolvido usando a seguinte stack:
                <List bulleted>
                    <List.Item>Node JS: </List.Item>
                    <List.Item>Express: </List.Item>
                    <List.Item>Postgres: </List.Item>
                    <List.Item>React: </List.Item>
                    <List.Item>Semantic-UI: </List.Item>
                </List>
            <Header inverted as="h3" id="npm">Pacotes NPM</Header>
            Estes são os pacotes mais relevantes usados durante o desenvolvimento do aplicativo:
            <List bulleted>
                <List.Item>Sequelize:</List.Item>
                <List.Item>BCrypt JS:</List.Item>
                <List.Item>Json Web Token (JWT):</List.Item>
                <List.Item>Dotenv:</List.Item>
                <List.Item>Axios:</List.Item>
                <List.Item>React Router:</List.Item>
            </List>
            <Header inverted as="h3" id="repo">Github</Header>
            <p>
                Você pode dar uma olhada ao código deste aplicativo em seu repositório Github
                <a href="https://github.com/ibanld/brasilfone" target="blank">
                    <Icon link size="large" target="_blank" inverted name="github" />
                </a>
            </p>
        </div>
    )
}
