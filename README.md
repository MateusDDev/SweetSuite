## Instruções do Projeto

1. **Clone o Repositório:**
   - Usando SSH:
     ```bash
     git clone git@github.com:MateusDDev/Crud.git
     ```

   - Usando HTTPS:
     ```bash
     git clone https://github.com/MateusDDev/Crud.git
     ```

2.  Navegue até o Diretório do Projeto:

    `cd Crud`

3.  Inicie os Containers com Docker Compose:

    `docker-compose up`

    Isso iniciará os serviços necessários para o frontend e backend.

4.  Acesse as Aplicações:

    -   Frontend: [http://localhost:4000](http://localhost:4000/)
    -   Backend: [http://localhost:5000/products](http://localhost:5000/products)


Banco de Dados (MySQL)
----------------------

-   Na raiz do projeto, você encontrará um script de seed para criar a tabela no MySQL e um exemplo de insert.

Observações
-----------

-   Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.
-   Para encerrar os containers, você pode usar `docker-compose down`.