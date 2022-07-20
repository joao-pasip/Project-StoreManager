# Projeto Store Manager

Projeto feito para treinar criação de API's, utilizando arquitetura MSC, utilizando o driver MySQL2. Seguindo os princípios de uma API RESTful.

A API é um CRUD(Create, Read, Update, Delete) de vendas.

Os testes unitários feitos utilizando as bibliotecas Mocha, Chai e Sinon tem 60% de cobertura nas camadas MSC (Models, Services e Controllers).

<hr></hr>

## 🛠 Habilidades
Node.js, MySQL, Arquitetura MSC, JOI e, testes com Mocha, Chai, Sinon.

<hr></hr>

## Variáveis de Ambiente

Para rodar esse projeto, atente-se as variáveis de ambiente no seu .env

Um exemplo já está disponível no arquivo `.env.example`, bastando renomear para `.env` e escolher o valor das variáveis.

<hr></hr>

## Utilização

- Para clonar o projeto: `git clone git@github.com:joao-pasip/Project-StoreManager.git`.

- Já existe um arquivo `docker-compose.yml` (Disponibilizado pela Trybe). Bastando usar o comando `docker-compose up` para rodar o MySQL e o Node pelo docker.

- Os arquivos para criação das tabelas e de seed se encontram nos arquivos `migration.sql` e `seed.sql` respectivamente. E podem ser utilizados em alguma ferramenta de gerenciamento de bancos de dados (como DBeaver, Extensão no VSCode MySQL ou MySQL Workbench).

- `npm install` para instalar as dependências.

- `npm start` para rodar a aplicação usando o node.

- `npm run debug` para rodar a aplicação usando o nodemon.

- `npm test` para testar a aplicação.

- Utilizar alguma Plataforma de API para acessar os endpoints e fazer seus devidos experimentos. Exemplos: Postman e Insomnia.

<hr></hr>

## Diagrama

![Diagrama de relacionamentos das tabelas](erStoreManager.png)

<i> Imagem disponibilizada pela Trybe </i>

<hr></hr>

## Endpoints

- GET `/products` para listar todos os produtos.
- GET `/products/:id` para listar um produto pelo id.
- POST `/products` para cadastrar um novo produto. (Deve receber no body a propriedade `name`).
- POST `/sales` para cadastrar vendas. (Deve receber um array de objetos, contendo as propriedades `productId` e `quantity`).
- GET `/sales` para listar todas as vendas.
- GET `/sales/:id` para listar vendas por id.
- PUT `/products/:id` para atualizar o nome de um produto por id. (Deve receber no body a propriedade `name`).
- DELETE `/products/:id` para deletar um produto, buscando por id.
- DELETE `/sales/:id` para deletar uma venda, buscando por id.
- PUT `/sales/:id` para atualizar uma venda, buscando por id. (Deve receber no body um array de objetos contendo `productId` e `quantity`).
- GET `/products/search?q=query` (substituindo `query` pelo termo que deve ser pesquisado) para pesquisar produtos pelo nome.

<hr></hr>

## Considerações finais

Foi um projeto que deu para consolidar a organização da arquitetura MSC, e também começar  a prática de testes unitários para cada camada dessa arquitetura utilizando Mocha, Chai e Sinon. Também deu para aplicar ainda mais as queries de MySQL, antes de começar a utilizar um ORM, como sequelize. Aqui é possível ver um [projeto que eu fiz utilizando ORM Sequelize](https://github.com/joao-pasip/Project-BlogsAPI).
