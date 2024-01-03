# CRUD - Aplicação de Gerenciamento de Dados

## Instruções de Configuração

1. **Clone o Repositório:**
   - Utilizando SSH:
     ```bash
     git clone git@github.com:MateusDDev/Crud.git
     ```

   - Utilizando HTTPS:
     ```bash
     git clone https://github.com/MateusDDev/Crud.git
     ```

2.  **Acesse o Diretório do Projeto:**
    ```bash
    cd Crud
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
    - Copie o conteúdo do arquivo `.env-example` e cole no arquivo recém-criado `.env`, definindo as variáveis conforme necessário.

## Backend

1.  **Inicie o MySQL e os Serviços Backend:**
    ```bash
    docker-compose up -d mysql
    ```
    Isso iniciará o serviço do MySQL. Em seguida, para concluir a configuração, execute os seguintes comandos:

    **No diretório `backend`:**
    ```bash
    env $(cat ../.env) npm run prestart && env $(cat ../.env) npm run dev
    ```

    - Todas as rotas da API estão localizadas na pasta `src/routes` do diretório `backend`.

## Frontend

1.  **Inicie o Serviço Frontend:**
    **No diretório `frontend`:**
    ```bash
    npm run dev
    ```

## Acesso à Aplicação

7.  **Acesso à Aplicação Completa:**
    - Para acessar a aplicação completa, incluindo funcionalidades de administrador, navegue até [http://localhost:4000/moderator](http://localhost:4000/moderator).
    - Faça login utilizando as seguintes credenciais:
        - Usuário: `user`
        - Senha: `pass`

8.  **Acesse as Aplicações Individuais:**
    -   Frontend: [http://localhost:4000](http://localhost:4000/)
    -   Backend: [http://localhost:5000/products](http://localhost:5000/products)

## Observações

-   Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.
