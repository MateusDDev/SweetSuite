# Crud

## Instruções de Configuração

1. **Clone o Repositório:**
   - Usando SSH:
     ```bash
     git clone git@github.com:MateusDDev/Crud.git
     ```

   - Usando HTTPS:
     ```bash
     git clone https://github.com/MateusDDev/Crud.git
     ```

2.  **Navegue até o Diretório do Projeto:**
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
    - Copie o conteúdo do arquivo `.env-example` e cole no arquivo recém-criado `.env` definindo as variáveis.

5.  **Inicie o MySQL e os Serviços Backend/Frontend:**
    ```bash
    docker-compose up -d mysql
    ```
    Isso inicializará o serviço do MySQL. Em seguida, para concluir a configuração, execute os seguintes comandos:

    **No diretório `backend`:**
    ```bash
    cd backend
    env $(cat ../.env) npm run prestart && env $(cat ../.env) npm run dev
    ```

    **No diretório `frontend`:**
    ```bash
    cd ../frontend
    npm run dev
    ```

6.  **Acesse as Aplicações:**
    -   Frontend: [http://localhost:4000](http://localhost:4000/)
    -   Backend: [http://localhost:5000/products](http://localhost:5000/products)

## Observações

-   Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.
