<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Chamados com Autenticação</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #333;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            overflow-x: auto;
        }
        .important {
            font-weight: bold;
        }
        .social-icons {
            margin-top: 20px;
        }
        .social-icons img {
            width: 30px;
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <h1>Sistema de Chamados com Autenticação</h1>

    <h2>Descrição</h2>
    <p><span class="important">Este é um sistema de chamados desenvolvido para gerenciar solicitações de suporte e alterações para a equipe de TI. Apenas chefes de departamento têm acesso para abrir chamados, e há um acesso master para categorizar a importância dos chamados.</span></p>

    <h2>Tecnologias Utilizadas</h2>
    <ul>
        <li><span class="important">Backend</span>: Node.js, Express, Mongoose</li>
        <li><span class="important">Frontend</span>: React, Axios, React Router</li>
        <li><span class="important">Banco de Dados</span>: MongoDB</li>
        <li><span class="important">Autenticação</span>: JWT (JSON Web Token)</li>
        <li><span class="important">Gerenciamento de Variáveis de Ambiente</span>: dotenv</li>
    </ul>

    <h2>Instalação e Configuração</h2>
    <h3>Requisitos</h3>
    <ul>
        <li><span class="important">Node.js</span></li>
        <li><span class="important">MongoDB</span></li>
    </ul>

    <h3>Passos de Instalação</h3>
    <ol>
        <li><span class="important">Clone o Repositório</span>
            <pre><code>git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio</code></pre>
        </li>
        <li><span class="important">Backend</span>
            <ul>
                <li>Navegue para o diretório do backend e instale as dependências:
                    <pre><code>cd backend
npm install</code></pre>
                </li>
                <li>Crie um arquivo <span class="important">.env</span> no diretório <span class="important">backend</span> com o seguinte conteúdo:
                    <pre><code>MONGO_URI=mongodb://localhost:27017/call_system
JWT_SECRET=sua_chave_secreta_aqui</code></pre>
                </li>
                <li>Inicie o servidor backend:
                    <pre><code>node app.js</code></pre>
                </li>
            </ul>
        </li>
        <li><span class="important">Frontend</span>
            <ul>
                <li>Navegue para o diretório do frontend e instale as dependências:
                    <pre><code>cd ../frontend
npm install</code></pre>
                </li>
                <li>Inicie o servidor de desenvolvimento do React:
                    <pre><code>npm start</code></pre>
                </li>
            </ul>
        </li>
    </ol>

    <h2>Estrutura do Projeto</h2>
    <pre><code>call_system/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Ticket.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tickets.js
│   ├── middleware/
│   │   └── auth.js
│   ├── app.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Dashboard.js
│   │   │   ├── CreateTicket.js
│   │   │   └── TicketList.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ... // outros arquivos padrão do React
├── README.md
└── package.json</code></pre>

    <h2>Uso</h2>
    <h3>Endpoints Backend</h3>
    <ul>
        <li><span class="important">Autenticação</span>
            <ul>
                <li><span class="important">POST</span> <code>/api/auth/login</code>: Realiza o login do usuário.</li>
                <li><span class="important">POST</span> <code>/api/auth/register</code>: Registra um novo usuário (apenas para fins de teste).</li>
            </ul>
        </li>
        <li><span class="important">Chamados</span>
            <ul>
                <li><span class="important">POST</span> <code>/api/tickets</code>: Cria um novo chamado (autenticado).</li>
                <li><span class="important">GET</span> <code>/api/tickets</code>: Recupera todos os chamados (autenticado).</li>
                <li><span class="important">PUT</span> <code>/api/tickets/:id</code>: Atualiza um chamado (autenticado e com acesso master).</li>
            </ul>
        </li>
    </ul>

    <h3>Frontend</h3>
    <ul>
        <li><span class="important">Login</span>: Página de login para chefes de departamento.</li>
        <li><span class="important">Dashboard</span>: Visualização de todos os chamados.</li>
        <li><span class="important">Create Ticket</span>: Formulário para criar um novo chamado.</li>
    </ul>

    <h2>Licença</h2>
    <p><span class="important">Este projeto está licenciado sob a licença MIT. Veja o arquivo <code>LICENSE</code> para mais detalhes.</span></p>

    <h2>Contribuições</h2>
    <p><span class="important">Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.</span></p>

    <h2>Contato</h2>
    <p><span class="important">Para mais informações, entre em contato com [seu-email@example.com].</span></p>

    <div class="social-icons">
        <a href="https://www.instagram.com/seu-usuario" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram">
        </a>
        <a href="https://api.whatsapp.com/send?phone=seu-numero" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
        </a>
        <a href="https://www.linkedin.com/in/seu-usuario" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn">
        </a>
    </div>
</body>
</html>
