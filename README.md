
# Sistema de Chamados com Autenticação

Este é um sistema de chamados desenvolvido para gerenciar solicitações de suporte e alterações para a equipe de TI. Apenas chefes de departamento têm acesso para abrir chamados, e há um acesso master para categorizar a importância dos chamados.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte [📦 Implantação](#📦-implantação) para saber como implantar o projeto.

## 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

- Node.js
- MongoDB

## 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

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

## ⚙️ Executando os testes

Explicar como executar os testes automatizados para este sistema.

### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

Dar exemplos

### ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

Dar exemplos

## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo.

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

- Node.js - Ambiente de execução JavaScript
- Express - Framework para Node.js
- React - Biblioteca JavaScript para construção de interfaces de usuário
- MongoDB - Banco de Dados NoSQL
- Mongoose - Biblioteca ODM para MongoDB
- JWT - JSON Web Token para autenticação
- dotenv - Gerenciamento de variáveis de ambiente

## 🖇️ Colaborando

Por favor, leia o COLABORACAO.md para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos SemVer para controle de versão. Para as versões disponíveis, observe as tags neste repositório.

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

- Um desenvolvedor - Trabalho Inicial - [umdesenvolvedor](https://github.com/umdesenvolvedor)
- Fulano De Tal - Documentação - [fulanodetal](https://github.com/fulanodetal)

Você também pode ver a lista de todos os colaboradores que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE.md para detalhes.

## 🎁 Expressões de gratidão

- Conte a outras pessoas sobre este projeto 📢;
- Convide alguém da equipe para uma cerveja 🍺;
- Um agradecimento publicamente 🫂;
- etc.

---

⌨️ com ❤️ por Armstrong Lohãns 😊
