<h1 align="center" >
  <img src="https://ik.imagekit.io/ik54mxkwpj/logo_push6QHQZ.png" />
</h1>

## 📋 Sobre

O projeto **VídeoUpload** é uma aplicação para uploads de vídeos, no qual consiste em salvar seus vídeos, comentar nos vídeos disponiveis na aplicação, podendo também fazer a troca de temas entre Dark e Light, com sistema de login e cadastro, possuindo restrição para usuários que possui conta em relação aos que não possuem, como por exemplo, o upload de vídeo e comentar nos vídeos.
O sistema tem um método para notificação para usuários novos e para quando o vídeo é comentado, chegará uma notificação para o dono, informando que algum usuário teria comentado em seu vídeo!!

[**Link para o Frontend:**](https://github.com/CarlosAug-tech/videoupload-web)

---

## 💡 Tecnologias Utilizadas

O backend do projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.JS](https://nodejs.org/en/)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [Nodemon](https://nodemon.io/)

### 🗃 **Database**:

- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org/)
- [Postgres](https://www.postgresql.org/)
- [Mongo](https://www.mongodb.com/)

---

## ⚙ Como configurar a Database

```bash
  $ docker run --name [nomedocontainer] -e POSTGRES_PASSWORD=[senha] -p 5432:[5432 ou porta livre] -d postgres

  $ docker run --name [nomedocontainer] -p 27017:[27017 ou porta livre] -d -t mongo

   $ docker run --name [nomedocontainer] -p 6379:[6379 ou porta livre] -d -t redis:alpine

```

### Inicializando os containers do Docker:

```bash
  $ docker start [nomedocontainer]
```

---

## 📦 Como baixar o projeto

```bash

  # Clonar o repositório
  $ git clone https://github.com/CarlosAug-tech/videoupload-server.git

  # Entrar no diretório
  $ cd videoupload-server

  # Instalar as dependências
  $ yarn install

  # Iniciar o backend
  $ yarn dev

```

---

Desenvolvido 😎 por Carlos Augusto Silva Santos
