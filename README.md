
# Sistema de Chamados com Autenticação

Este é um sistema de chamados desenvolvido para gerenciar solicitações de suporte e alterações para a equipe de TI. Apenas chefes de departamento têm acesso para abrir chamados, e há um acesso master para categorizar a importância dos chamados.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.


## 📋 Pré-requisitos

- Node.js
- MongoDB

## 🔧 Instalação

### Clone o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### Backend

Navegue para o diretório do backend e instale as dependências:

```bash
cd backend
npm install
```

Crie um arquivo `.env` no diretório `backend` com o seguinte conteúdo:

```env
MONGO_URI=mongodb://localhost:27017/call_system
JWT_SECRET=sua_chave_secreta_aqui
```

Inicie o servidor backend:

```bash
node app.js
```

### Frontend

Navegue para o diretório do frontend e instale as dependências:

```bash
cd ../frontend
npm install
```

Inicie o servidor de desenvolvimento do React:

```bash
npm start
```

## 🛠️ Construído com

- Node.js - Ambiente de execução JavaScript
- Express - Framework para Node.js
- React - Biblioteca JavaScript para construção de interfaces de usuário
- MongoDB - Banco de Dados NoSQL
- Mongoose - Biblioteca ODM para MongoDB
- JWT - JSON Web Token para autenticação
- dotenv - Gerenciamento de variáveis de ambiente

## 📌 Versão

  1.0

## ✒️ Autores

- Trabalho Inicial - [Github](https://github.com/Lucasjpl1)
- Documentação - [Github](https://github.com/Lucasjpl1)

Você também pode ver a lista de todos os colaboradores que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE.md para detalhes.
