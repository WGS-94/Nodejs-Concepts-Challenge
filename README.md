# Conceitos do NodeJS
Esta é uma aplicação NodeJS que simula a implementação de uma Todo List(lista de tarefas) na parte do Back-End, onde realiza-se o CRUD (Create, Read, Update, Delete) dos todos.

Os objetivos principais foram treinar e aprimorar conceitos bases do NodeJS com a Biblioteca Express, como `criação de rotas`, `recebimento e envio de parâmetros do tipo Route, Query e Body` e `utilização de Middlewares`.

Contudo, este é um projeto desenvolvido como Desafio do curso Ignite NodeJS da [Rocketseat](https://www.rocketseat.com.br/).


## 🚀 Technologies
✔ NodeJS
<br>
✔ JavaScript
<br>
✔ [Library Express](https://expressjs.com/)
<br>
✔ [Package Nodemon](https://www.npmjs.com/package/nodemon)
<br>
✔ [Package uuid](https://www.npmjs.com/package/uuid)
<br>
✔ [VS Code](https://code.visualstudio.com/)

## ⚙ Settings
* Para executar o projeto você deve baixar os arquivos ou dar um `git clone` do repositório.
* Após baixar rode o comando `yarn` no terminal dentro do diretório do projeto para baixar todas as dependências.
* Depois de baixar as dependências siga os seguintes passos para execução do projeto:
    - `yarn dev`: para executar o servidor na base url `http://localhost:3333`.
    > 🚨 OBS
    > Você pode utilizar o [Insômnia](https://insomnia.rest/download) para testar as rotas da aplicação


## Routes

### /users(POST)
* Demonstration:
<img src="./Demonstrations/Demonstration01-Rota-Create-Account.jpg" alt="Demostração Rota de criação de usuário">

### /todos(GET)
* Demonstration:
<img src="./Demonstrations/Demonstration02-Rota-Create-Todo.jpg" alt="Demostração Rota de criação de todo">

### /todos(POST)
* Demonstration:
<img src="./Demonstrations/Demonstration03-Rota-List-Todos.jpg" alt="Demostração Rota de listagem de todos">

### /todos/:id(PUT)
* Demonstration:
<img src="./Demonstrations/Demonstration04-Rota-Update-Todo.jpg" alt="Demostração Rota de atualização do todo">

### /todos/:id/done(PATCH)
* Demonstration:
<img src="./Demonstrations/Demonstration05-Rota-Conclued-Todo.jpg" alt="Demostração Rota de coclusão de todo">

### /todos/:id(DELETE)
* Demonstration:
<img src="./Demonstrations/Demonstration06-Rota-Delete-Todo.jpg" alt="Demostração Rota de deletar todo">


## ✍ Author
<img alt="PabloXT14" title="PabloXT14" src="https://avatars.githubusercontent.com/u/71723595?s=400&u=f7a1ec0c2e1f7cd1acf79f61043dbc75b1079de6&v=4" width="100">
<p>
    Made with 💜 by PabloXT14
</p>
<p align="left">
    <a href="https://www.linkedin.com/in/pabloalan/" target="_blank">
        <img align="center" src="https://img.shields.io/badge/LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin Pablo Alan" />
    </a>
    <a href="mailto:pabloxt14@gmail.com" target="_blank">
        <img align="center" src="https://img.shields.io/badge/Gmail-FF0000?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail Pablo Alan" />
    </a>
</p>