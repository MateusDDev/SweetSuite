# Sistema de Gerenciamento de Produtos

## Descrição do Projeto

Aplicação desenvolvida para gerenciamento de produtos. Permite criar, visualizar, editar e excluir produtos. Além disso, possui um sistema de autenticação que restringe certas funcionalidades apenas a usuários autorizados, garantindo segurança e controle sobre o conteúdo.

### Funcionalidades Principais:

- **Gestão de Produtos**: Os usuários podem adicionar novos produtos, atualizar informações existentes, visualizar detalhes e remover produtos conforme necessário.

- **Autenticação de Usuário**: A aplicação utiliza um sistema de autenticação baseado em JWT (JSON Web Tokens). Isso permite que apenas usuários autorizados acessem e modifiquem o conteúdo da aplicação.

### Tecnologias Utilizadas:

#### Backend:
![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![image](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
- Autenticação com JWT: Sistema de autenticação baseado em JSON Web Tokens para controlar o acesso às funcionalidades da aplicação.

#### Frontend:
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)


## Iniciando o projeto localmente

1. **Clone o Repositório:**
   - Utilizando SSH:
     ```bash
     git clone git@github.com:MateusDDev/SweetSuite.git
     ```

   - Utilizando HTTPS:
     ```bash
     git clone https://github.com/MateusDDev/SweetSuite.git
     ```

2.  **Acesse o Diretório do Projeto:**
    ```bash
    cd SweetSuite
    ```

3.  **Instale as Dependências no Backend e Frontend:**
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

4.  **Configuração do Ambiente:**
    - Crie um arquivo `.env` na raiz do projeto.
    - Copie o conteúdo do arquivo `.env-example` e cole no arquivo recém-criado `.env`.

5. **Inicie os serviços docker:**
     ```bash
    docker-compose up -d
    ```

## Acesso à Aplicação

7.  **Acesso à Aplicação Completa:**
    - Para acessar a aplicação, incluindo funcionalidades de administrador, navegue até [http://localhost:4000/moderator](http://localhost:4000/moderator).
    - Faça login utilizando as seguintes credenciais:
        - Usuário: `user1`
        - Senha: `password1`

8.  **Acesse as Aplicações Individuais:**
    -   Frontend: [http://localhost:4000](http://localhost:4000/)
    -   Backend: [http://localhost:5000/products](http://localhost:5000/products)

## Observações

-   Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.
