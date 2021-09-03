import { Header, Divider, Segment, Image } from 'semantic-ui-react'

const bgColor = {
    backgroundColor: '#17223B'
}

export default function Development() {
    return (
        <>
            <Header as="h2" inverted>Modelo de Desenvolvimento</Header>
            <Header as="h3" inverted id="backend">Design de Backend</Header>
            Estas são algumas das características mais notáveis ​​do design de back-end:
            <p>
                Com <strong>Sequelize</strong>, mudamos o uso do banco de dados Postgres para Node e JavaScript, assim o workflow e similar a MongoDB.
                <br/> Fazemos os modelos de Usuários da mesma forma que fazeriamos com <strong>mongoose</strong> para MongoDB. Definimos o modelo com:
            </p>
            <Segment inverted>
            (conexão ao banco de dados).define( nome de modelo, {'{ propiedad: { type: tipo de dado } }'})
            </Segment>
            <Image src="/assets/imgs/model.png" />
            A conexão com o banco de datos é assim:
            <Image src="/assets/imgs/db_connect.png" />
            <p>
                <br/>Anteriormente falamos sobre os tokens, a assinatura dos tokens ocorre uma vez que o usuário logou corretamente, 
                <br/>então uma chamada é feita para a rota <strong>/api/auth</strong> e retorna um token com o qual o usuário pode acessar as rotas protegidas.
            </p>
            <Image src="/assets/imgs/jwtToken.png" />
            <p>
                Com a função a seguir, criamos o token assinado usando o e-mail recebido da API e usando a senha armazenada no arquivo .env
            </p>
            <Segment inverted style={bgColor}>
                jwt.sign({'propiedad: valor'}, chave secreta)
            </Segment>
            Esta função retorna um token com o seguinte formato:
            <Segment inverted style={bgColor}>
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoZWVrb0BnbWFpbC5jb20iLCJpYXQiOjE2MzA1OTU4MjN9.16EHm8-DWfAXO7L2gf928K1da2TVy_Z55ECxH2H1ltg
            </Segment>
            <Header as="h3" inverted id="frontend">Design de Frontend</Header>
                Estas são algumas das características mais notáveis ​​do design de front-end:
                <p>
                    O gerenciamento do estado do aplicativo é feito pelo React Context.
                </p>
                <p>
                    A criação de rotas na aplicação é gerenciada pelo React Router. A rota especial AuthRoute só permite o acesso a usuários corretamente logados através do gerenciador de status de Context.
                </p>
                <p>
                    Na seção de atualização de senha do menu de conta, é verificado no frontend se as duas senhas correspondem.
                </p>
                <p>
                    A seção Rotas API pode usar as rotas exigidas no teste em tempo real
                </p>
            <Divider />
        </>
    )
}
