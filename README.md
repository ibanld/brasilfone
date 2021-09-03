# Brasilfone Javascript Challenge
Vôce pode ter acesso ao projecto em [Heroku](https://brasilfone.herokuapp.com). Lá fica toda a informaçao e você pode testar as rotas desde o aplicativo mesmo e ler a documentaçao completa com exemplos do código.

## Tecnologias usadas
### Backend
- NodeJS
- Express
- Sequalize
- Json Web Token
- Bcrypt
### Frontend
- React
- React Router DOM
- React Context
- Semantic UI
- Axios

## Instalaçao
Clonar o repositório desde Github
> $ git clone https://github.com/ibanld/brasilfone.git

Para Instalar as dependências usamos o comando seguinte desde a pasta "/brasilfone":
> cd brasilfone

> npm install

### Conectar com o banco de dados
Neste aplicativo você pode conectar diretamente ao Banco de Dados. Crie um arquivo .env e adicione os seguintes valores:

>DB_USER= (nome de usuário na sua base de dados)

>DB_NAME= (nome da sua base de dados

>DB_PASSWORD= (senha da sua base de dados)

>DB_HOST= (host da sua base de dados)

>DB_URL= (URI da sua base de datos)

>JWT_SECRET= thisIsASecretSenhaForJWT

Nao modifique o valor de JWT_SECRET para poder fazer login con as contas já salvadas no banco de dados.

### Iniciar Servidor e Cliente
Se você seguiu as etapas anteriores, poderá executar o servidor e o cliente com o seguinte comando:

>$ npm run dev

Este aplicativo usa Concurrently para executar Servidor e Cliente ao mesmo tempo em modo de desenvolvimento, alêm disso Nodemon atualiza toda vez que salvamos alterações no código. Ágora só tem que abrir o seu browser favorito e ir à endereço:

>http://localhost:3000/

## Rotas do API
### Rotas Públicas
As rotas públicas neste App nao precisam token de autorização.
Com Express podemos usar router, importando express().Router
>const router = require('express').Router()

>router.post('/cadastre-se', users.addUser)

A chamada para a rota no API tem os seguintes parámetros:

>router.post/get/put/delete('endereço', funcion controlador)

- Endereço: a rota onde nos fazemos nossa chamada ao API

- Funcion controlador: o que acontecerá com os dados que receba a rota

Um exemplo de controlador e este que permite salvar os usuários no banco de dados

Neste código pegamos o email e a senha desde o objeto enviado pela chamada à API com req.body, depois verificamos que há email válido e senhá.

Se temos e-mail e senha verificamos que o email nao fique no banco de dados, se há um memso mail enviamos uma mensagem e cancelamos a operaçao.

Se nao há nenhum email igual, entao verificamos que o Email está no formato correto, se está certo criptografamos a senha com BCrypt

Finalmente, salvamos o novo usuário usando o driver Object.create(object) de Sequelize. Se todo foi certo, enviamos uma mensagem informando.

![criar conta](https://raw.githubusercontent.com/ibanld/brasilfone/main/client/public/assets/imgs/controllerCode.png)

### Rotas Privadas
As rotas privados usam Json Web Token para verificar se o usuário foi identificado corretamente no banco de dados e assim ter acesso ao contenúdo do App.
As rotas privadas tem o seguinte formato:
> router.get('/', verifyToken, users.findAll)

Para fazer isso, nos precisamos usar uma funcion middleware chamada verifyToken para verificar que o token enviado desde o cliente está certo.

Pegamos o token enviado desde a petiçao em req.header com o nome x-auth-token
Se nao há token, nos retornamos que no foi achado nenhum token, se há um token usamos jwt.verify e se o token está certo, contiuamos o chamado de API com next().

No Design de Backend fica a informaçao sobre assinamento do tokens.
![assinar token](https://raw.githubusercontent.com/ibanld/brasilfone/main/client/public/assets/imgs/jwtAuth.png)

## Design de Back-End
Estas são algumas das características mais notáveis ​​do design de back-end:

Com Sequelize, mudamos o uso do banco de dados Postgress para Node e JavaScript, assim o workflow e similar a MongoDB.
Fazemos os modelos de Usuários da mesma forma que fazeriamos com mongoose para MongoDB. Definimos o modelo com:

>(coneçao ao banco de dados).define( nome de modelo, { propiedad: { type: tipo de dado } })

![model](https://raw.githubusercontent.com/ibanld/brasilfone/main/client/public/assets/imgs/model.png)

A coneçao com o banco de datos é assim:
![coneçao](https://raw.githubusercontent.com/ibanld/brasilfone/main/client/public/assets/imgs/db_connect.png)

Anteriormente falamos sobre os tokens, a assinatura dos tokens ocorre uma vez que o usuário logou corretamente,
então uma chamada é feita para a rota / api / auth / e retorna um token com o qual o usuário pode acessar as rotas protegidas

![assinamento token](https://raw.githubusercontent.com/ibanld/brasilfone/main/client/public/assets/imgs/jwtToken.png)

Com a função a seguir, criamos o token assinado usando o e-mail recebido da API e usando o segredo armazenado no arquivo .env
>jwt.sign(propiedad: valor, chave secreta)