## Exercícios de fixação - dump

Selecione um dos bancos de dados já existentes no seu servidor local ( w3schools , northwind , sakila , hr etc.) e faça os passos a seguir:

1. Exporte a estrutura e os dados (tabelas, triggers, procedures, functions e o schema) para um dump em formato de arquivo SQL, como foi exibido nas instruções anteriores. Faça o dump através da linha de comando e usando o MySQL Workbench.
2. Após ter feito isso, abra o arquivo usando algum editor de texto e altere as duas linhas iniciais, mudando o nome do banco a ser criado e do banco a ser usado. Assim seu script vai restaurar um banco novo e não sobrescrever o atual.
3. Restaure o backup do banco de dados criado por você.
4. Confira que, ao executar os comandos para restaurar o dump , um novo banco de dados foi criado, como na imagem abaixo.


## Respostas

```
mysqldump -u SamuelMelo -p normalization > data-normalization-backup.sql

mysql -u SamuelMelo -p

CREATE DATABASE normalization2

mysql -u SamuelMelo -p normalization2 < data-normalization-backup.sql
```

