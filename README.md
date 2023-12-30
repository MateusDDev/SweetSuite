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

5.  **Inicie os Containers com Docker Compose:**
    ```bash
    docker-compose up -d
    ```
    Isso iniciará os serviços necessários para o frontend e backend.

6.  **Inicie uma Conexão com o MySQL:**
    -   Acesse o MySQL utilizando o usuário e senha definidos no arquivo `.env`.
    -   Na raiz do projeto, você encontrará um script de seed (`seed.sql`) para criar as tabelas no MySQL.

7.  **Acesse as Aplicações:**
    -   Frontend: [http://localhost:4000](http://localhost:4000/)
    -   Backend: [http://localhost:5000/products](http://localhost:5000/products)

## Observações

-   Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.
-   Para encerrar os containers, você pode usar `docker-compose down`.
