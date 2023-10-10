# API_CRUD

# Gerenciamento de pacientes e médicos.
Trata-se de uma API simples que gerencia pacientes, médicos e associações entre eles usando o framework Express.js e o ORM Sequelize. É possível usar esta API para realizar operações CRUD (Create, Read, Update, Delete) em pacientes, médicos e associações paciente-médico.

# Passos a serem seguidos:
Primeiramente é importante certificar-se de ter o Node.js instalado no seu sistema. Também é preciso de um servidor de banco de dados SQL, como o MySQL, configurado e em execução.

1. Clone o repositório do GitHub para sua máquina:

    ```bash
    git clone https://github.com/nakamuraraquel/API_CRUD.git
    cd API_RESTful

2. Instale as dependências necessárias do projeto:

    ```bash
    npm start

3. Configure o banco de dados:

   - Abra o arquivo `database.js` e em seguida ajuste as configurações do banco de dados de acordo com as suas preferências e necessidades. É possível definir o nome do banco de dados, nome de usuário, senha e host.

   ```javascript
   const sequelize = new Sequelize('mysql://<username>:<passoword>@<host>:<port>/<database_name>')



# Criação do Banco de Dados:

4. Criando o banco de dados:

    ```bash
    mysql -u <user> -p
    <password>
    ```

    ```mysql
    CREATE DATABASE <database_name>;
    exit;

# Baixando módulos

5. Digite o comando a seguir:

    ```bash
    npm install

# Inicializando servidor

6. Insira o comando a seguir:

    ```bash
    npm start
