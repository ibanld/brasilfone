import { Header, Divider, Icon, Segment, Button } from 'semantic-ui-react'

const bgColor = {
    backgroundColor: '#17223B'
}

export default function Starting() {
    return (
        <>
            <Header as="h2" inverted>Començando</Header>
            <Header as="h3" inverted id="node">Comprovando Node</Header>
                Em primeiro lugar verificamos se Node está instalado e qual é versão que temos de Node e NPM com os seguintes comandos:
            <Segment inverted>
                <p>$ node -v </p>
                <p>v14.5.5</p>
                <p>$ npm -v</p>
                <p>7.21.0</p>
            </Segment>
            Se as versões de Node e NPM forem antigas, você pode atualizá-las com os seguintes comandos:
            <Segment inverted>
                <p>$ sudo n latest</p>
                <p>$ npm install -g npm</p>
            </Segment>
            Se você precisar de um gerenciador de versão para Node, você pode instalar N:
            <Segment inverted>
                <p>$ npm install -g n</p>
            </Segment>
            Se você não possuir Node instalado em seu computador, pode fazer download clicando no logo "Node". <a href="https://nodejs.org/en/download/" target="blank"><Icon inverted size="large" link name="node js"></Icon></a>
            <Header as="h3" inverted id="install">Baixar e Instalar repositório</Header>
            Para fazer o download do repositório em seu computador, é necessário apenas seu sistema operacional. Inicialmente, verifique que você tem Git instalado em seu computador.
            <Segment inverted>
                <p>$ git --version</p>
                <p>git version 2.23.0</p>
            </Segment>
            Caso você precise instalar o git, basta clicar neste ícone <a href="https://git-scm.com/downloads" target="blank"><Icon link inverted size="large" name="git square"/></a>.
            Agora, você pode baixar o repositório deste aplicativo com o seguinte comando:
            <Segment inverted>
                <p>$ git clone https://github.com/ibanld/brasilfone.git</p>
                <p>cd brasilfone</p>
            </Segment>
            Para Instalar as dependências, utilizamos o seguinte comando a partir da pasta "/brasilfone":
            <Segment inverted>
                <p>$ npm install</p>
            </Segment>
            <Header as="h3" inverted id="connect">Conectar com Banco de Dados</Header>
            Neste aplicativo, você pode conectar diretamente ao Banco de Dados. Crie um arquivo .env e adicione os seguintes valores:
            <Segment inverted>
                <p>/brasilfone $ touch .env</p>
            </Segment>
            <Segment compact style={bgColor}>
                <p>DB_USER= (nome de usuário na sua base de dados)</p>
                <p>DB_NAME= (nome da sua base de dados</p>
                <p>DB_PASSWORD= (senha da sua base de dados)</p>
                <p>DB_HOST= (host da sua base de dados)</p>
                <p>DB_URL= (URI da sua base de datos)</p>
                <p>JWT_SECRET= thisIsASecretSenhaForJWT</p>
                <p>Não modifique o valor de <strong>JWT_SECRET</strong> para poder fazer login con as contas já salvadas no banco de dados</p>
            </Segment>
            <p>Você pode baixar uma cópia do Banco de Dados clicando em:</p>
            <Button type="button" color="orange" size="huge" content="Baixar Copia Database" icon="cloud download" href="/assets/database/brasilfone_challenge.sql"/>
            <Header as="h3" inverted id="starting">Iniciar Servidor e Cliente</Header>
            Se você seguiu as etapas anteriores, poderá executar o servidor e o cliente com o seguinte comando:
            <Segment inverted>
                <p>$ npm run dev</p>
            </Segment>
            Este aplicativo usa <strong>Concurrently</strong> para executar Servidor e Cliente ao mesmo tempo em modo de desenvolvimento, alêm disso <strong>Nodemon</strong> atualiza toda vez que salvamos alterações no código.
            Agora, somente é necessário iniciar seu browser favorito e acessar o seguinte endereço: 
            <Segment inverted style={bgColor}>
                <p>http://localhost:3000/</p>
                <p>E-Mail: helloWorld@email.com</p>
                <p>Senha: bomdia</p>
            </Segment>
            <Divider inverted />
        </>
    )
}
