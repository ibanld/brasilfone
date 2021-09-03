import { Header, Divider, Icon, Segment, Button } from 'semantic-ui-react'

const bgColor = {
    backgroundColor: '#17223B'
}

export default function Starting() {
    return (
        <>
            <Header as="h2" inverted>Començando</Header>
            <Header as="h3" inverted id="node">Comprobando Node</Header>
                Em primeiro lugar verificamos se Node está instalado e qual é versão que temos de Node e NPM com os seguintes comandos:
            <Segment inverted>
                <p>$ node -v </p>
                <p>v14.5.5</p>
                <p>$ npm -v</p>
                <p>7.21.0</p>
            </Segment>
            Se as versoes de Node e NPM foram antigas, você pode atualizá-los com os seguintes comandos:
            <Segment inverted>
                <p>$ sudo n latest</p>
                <p>$ npm install -g npm</p>
            </Segment>
            Se voce precisa de um gerenciador de versão para Node, você pode instalar N:
            <Segment inverted>
                <p>$ npm install -g n</p>
            </Segment>
            Se você não tem Node no seu computuador pode fazer click no logo de Node <a href="https://nodejs.org/en/download/" target="blank"><Icon inverted size="large" link name="node js"></Icon></a>
            <Header as="h3" inverted id="install">Baixar e Instalar repositório</Header>
            Para baixar o repositório desde seu computuador so precisa de usar a Consola do seu sistema operacional:
            Primeiro você tem que comprobar si tem git bash no seu computuador:
            <Segment inverted>
                <p>$ git --version</p>
                <p>git version 2.23.0</p>
            </Segment>
            Caso você precise instalar o git, basta clicar neste ícone <a href="https://git-scm.com/downloads" target="blank"><Icon link inverted size="large" name="git square"/></a>.
            Agora você pode baixar o repositório deste aplicativo com o seguinte comando: 
            <Segment inverted>
                <p>$ git clone https://github.com/ibanld/brasilfone.git</p>
                <p>cd brasilfone</p>
            </Segment>
            Para Instalar as dependências usamos o comando seguinte desde a pasta "/brasilfone":
            <Segment inverted>
                <p>$ npm install</p>
            </Segment>
            <Header as="h3" inverted id="connect">Conectar com Banco de Dados</Header>
            Neste aplicativo você pode conectar diretamente ao Banco de Dados. Crie um arquivo .env e adicione os seguintes valores:
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
            <p>Você pode baixar uma copia do Banco de Dados fazendo click e baixar:</p>
            <Button type="button" color="orange" size="huge" content="Baixar Copia Database" icon="cloud download" href="/assets/database/brasilfone_challenge.sql"/>
            <Header as="h3" inverted id="starting">Iniciar Servidor e Cliente</Header>
            Se você seguiu as etapas anteriores, poderá executar o servidor e o cliente com o seguinte comando:
            <Segment inverted>
                <p>$ npm run dev</p>
            </Segment>
            Este aplicativo usa <strong>Concurrently</strong> para executar Servidor e Cliente ao mesmo tempo em modo de desenvolvimento, alêm disso <strong>Nodemon</strong> atualiza toda vez que salvamos alterações no código.
            Ágora só tem que abrir o seu browser favorito e ir à endereço: 
            <Segment inverted style={bgColor}>
                <p>http://localhost:3000/</p>
                <p>E-Mail: helloWorld@email.com</p>
                <p>Senha: bomdia</p>
            </Segment>
            <Divider inverted />
        </>
    )
}
