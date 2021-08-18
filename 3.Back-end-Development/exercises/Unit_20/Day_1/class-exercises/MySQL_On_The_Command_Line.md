## Vamos treinar!
Usando os comandos que você acabou de ver, resolva os seguintes desafios:
1. Entre no banco de dados mysql .
    ```
    mysql -u root -p
    ```
2. Visualize todas as tabelas desse banco.
    ```
    SHOW DATABASES;
    USE sakila;
    SHOW TABLES;
    ```

3. Visualize a estrutura de pelo menos 10 tabelas diferentes e tente entender o tipo de estrutura que costuma ser utilizada.
    ```
    DESCRIBE actor;
    DESCRIBE actor_info;
    DESCRIBE address;
    DESCRIBE category;
    DESCRIBE city;
    DESCRIBE country;
    DESCRIBE customer;
    DESCRIBE customer_list;
    DESCRIBE film;
    DESCRIBE film_actor;
    ```

4. Crie um novo banco de dados com o seu nome e depois entre nele!
    ```
    CREATE DATABASE SamuelMelo;
    USE SamuelMelo;
    ```
