# Projeto de E-commerce da Sandra (Cotemig)

Este é um projeto de e-commerce desenvolvido com a stack MERN (MongoDB, Express, React e Node.js). Ele permite aos usuários visualizar, adicionar e gerenciar produtos, além de realizar compras e pagamentos. O projeto foi dividido em duas partes: Backend e Frontend.

---

## Estrutura do Projeto

### Backend

O backend do projeto foi desenvolvido utilizando **Node.js** com **Express** e o banco de dados utilizado foi o **SQLite**. Ele gerencia a lógica de autenticação, controle de produtos e usuários, além de fornecer APIs para o frontend.

#### Funcionalidades:
- Cadastro de usuários
- Login de usuários
- CRUD de produtos
- Controle de pedidos

**Principais arquivos e pastas do Backend:**

- `backend/server.js`: Arquivo principal para iniciar o servidor.
- `backend/routes/`: Contém as rotas para o CRUD de produtos e controle de usuários.
- `backend/controllers/`: Contém a lógica de controle para produtos e usuários.
- `backend/models/`: Definições dos modelos de dados, como produto e usuário.
- `backend/database.db`: Banco de dados SQLite onde as informações são armazenadas.

### Frontend

O frontend foi desenvolvido com **React** e **Vite**. A interface de usuário (UI) é moderna e responsiva, com foco na experiência de compra online.

#### Funcionalidades:
- Exibição de produtos
- Detalhamento de produtos
- Carrinho de compras
- Autenticação de usuários
- Dashboard para administração de produtos

**Principais arquivos e pastas do Frontend:**

- `frontend/src/pages/`: Contém as páginas principais da aplicação como Home, Produto, Carrinho e Dashboard.
- `frontend/src/components/`: Componentes reutilizáveis como Navbar, ProductCard, CartItem, etc.
- `frontend/src/context/`: Contextos para autenticação (`AuthContext`) e carrinho (`CartContext`).
- `frontend/src/css/`: Arquivos de estilo para as páginas e componentes.
- `frontend/src/App.jsx`: Arquivo principal do React, gerencia as rotas e contextos.

Tecnologias Utilizadas
Backend:

Node.js
Express
SQLite
Frontend:

React
Vite
CSS (para o estilo da página)
React Router DOM (para navegação entre páginas)


Kauan...
---
