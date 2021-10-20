<div align="center">
  <img src=".github/nlwheat.png" />
  <br />
  <br />
  <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ad056502-a320-445d-a041-586df6d66d07/node.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211020T141200Z&X-Amz-Expires=86400&X-Amz-Signature=b82ee0dfe8960391622caed97ac543dd2cb5ff6984a5471ec27511b9c073ad1a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22node.png%22" width=150 />
</div>

## 📝 Sobre
Primeiro dia da *NLW Heat*, a última NLW do ano, criamos a parte do back-end da nossa aplicação toda em Node.js + Typescript, tudo isso está servindo como um esquenta para o

![DoWhile](.github/Logo%20DoWhile%20-%202021.png)

Nesta aula vimos e construimos as seguintes funções:
- Criação de autenticação do usuário pelo Github, utilizando o OAuth
- Criamos uma rota de callback para validar o usuário
- Criamos a parte da nossa autenticação, access_token do Github, dados do usuário
- Utilizamos o Prisma, criamos migrations, tabelas, vimos o relacionamento de duas tabelas pelo Prisma
- Criamos a parte de mensagem inserindo elas no WebSocket, criamos um servidor com express, http e com websocket
- Listagem das ultimas 3 mensagens do usuário
- Criamos nosso middleware para fazer a parte de autenticação da nossa aplicação

## ✨ Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:
  - [Typescript](https://www.typescriptlang.org/)
  - [Express](https://expressjs.com/pt-br/)
  - [Prisma](https://www.prisma.io/)
  - [JSON WEB TOKEN](https://jwt.io/)
  - [Socket.io](https://socket.io/)

## 🚀 Como executar
Obs.: Nesse projeto temos autenticação via OAuth com o GitHub

  - Clone o repositório e acesse a pasta;
  - Crie um arquivo `.env` e preencha com as credenciais do Github,
    - `GITHUB_CLIENT_SECRET=`
    - `GITHUB_CLIENT_ID=`
    - `JWT_SECRET=`
  - Instale as dependências com `yarn`;
  - Executa as migrations com `yarn prisma migrate dev`;
  - Inicie o servidor com `yarn dev`;
  - A aplicação pode ser acessada em `localhost:4000`.

## 👨🏽‍💻 Autor
#### Feito com 🤎 por *[Gabriel Bittencourt Penteado](https://www.linkedin.com/in/gabriel-bittencourt-penteado/)*. Entre em contato! 👋🏽