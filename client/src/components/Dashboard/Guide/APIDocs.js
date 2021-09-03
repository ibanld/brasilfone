import { Header, Divider, Segment, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const bgColor = {
    backgroundColor: '#17223B'
}

export default function APIDocs() {
    return (
        <>
            <Header inverted as="h2">Rotas do API</Header>
                <p>Se você prefere testar e olhar as rotas diretamente faça click <Link to="/dashboard/routes">aquí</Link></p>
                <Button type="button" color="orange" size="huge" link content="Baixar API para Postman" icon="rocket" href="/assets/postman/brasilfone_requests_postman.json" target="blank" />
            <Header inverted as="h3" id="public">Rotas Públicas</Header>
            As rotas públicas neste App nao precisam token de autorização. No código as rotas tem a seguinte definiçao:
            <Segment inverted style={bgColor}>
                <p>@route      POST /api/users</p>
                <p>@access     public</p>
                <p>@desc       Create new user</p>
            </Segment>
            <p>Em @route temos o methodo que vai utilizar e a rota, neste caso POST na rota /api/users</p>
            <p>@access define quem vai poder ter acesso a rota, neste caso como é pública, todo o mundo tem acesso, assim poderam criar as suas contas de usuário</p>
            <p>Com <strong>Express</strong> podemos usar router, importando express().Router</p>
            <Segment inverted style={bgColor}>
                <p>const router = require('express').Router()</p>
                <p>router.post('/cadastre-se', users.addUser)</p>
            </Segment>
            A chamada para a rota no API tem os seguintes parámetros: 
            <Segment inverted style={bgColor}>
                <p>router.<strong>post/get/put/delete</strong>('endereço', funcion controlador)</p>
                <p>Endereço: a rota onde nos fazemos nossa chamada ao API</p>
                <p>Funcion controlador: o que acontecerá com os dados que receba a rota</p>
            </Segment>
            Um exemplo de controlador e este que permite salvar os usuários no banco de dados
            <p>
                Neste código pegamos o email e a senha desde o objeto enviado pela chamada à API com req.body, depois verificamos que há email válido e senhá.
                <br/> Se temos e-mail e senha verificamos que o email nao fique no banco de dados, se há um memso mail enviamos uma mensagem e cancelamos a operaçao. 
                <br/> Se nao há nenhum email igual, entao verificamos que o Email está no formato correto, se está certo criptografamos a senha com <strong>BCrypt</strong>
                <br /> Finalmente, salvamos o novo usuário usando o driver Object.create(object) de <strong>Sequelize</strong>. Se todo foi certo, enviamos uma mensagem informando.
            </p>
            <Image src="/assets/imgs/controllerCode.png" />
            <Header as="h3" inverted id="private">Rotas Privadas</Header>
            <p>
                As rotas privados usam Json Web Token para verificar se o usuário foi identificado corretamente no banco de dados e assim ter acesso ao contenúdo do App.
                <br/> As rotas privadas tem o seguinte formato: 
            </p>
            <Segment inverted style={bgColor}>
                router.get('/', verifyToken, users.findAll)
            </Segment>
            <p>
                Para fazer isso, nos precisamos usar uma funcion middleware chamada <strong>verifyToken</strong> para verificar que o token enviado desde o cliente está certo.
                <br/> Pegamos o token enviado desde a petiçao em req.header com o nome <strong>x-auth-token</strong>
                <br/> Se nao há token, nos retornamos que no foi achado nenhum token, se há um token usamos <strong>jwt.verify</strong> e se o token está certo, contiuamos o chamado de API com <strong>next()</strong>.
                <br/> No <a href="#frontend">Design de Frontend</a> fica a informaçao sobre assinamento do tokens.
            </p>
            <Image src="/assets/imgs/jwtAuth.png" />
            <Divider />
        </>
    )
}
