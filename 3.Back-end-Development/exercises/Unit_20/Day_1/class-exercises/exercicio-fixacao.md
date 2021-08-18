## Exercícios de fixação
###### Analise a tabela a seguir:
![Conteúdo da tabela address](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/table1-a6228d5cf09aea61d1e205b18663d256.png)

Sem ter acesso à estrutura interna de como essa tabela foi criada, tente responder ao seguinte:

1. **Quais constraints a coluna address_id poderia ter? Por quê?**

    PRIMARY KEY pois assim será garantido que a informação será única e não nula. Também estaremos atribuíndo um identificador único da tabela.

2. **A coluna city_id é um número. Consegue identificar que tipo de constraint foi aplicado a ela?**
    
    FOREIGN KEY pois essa informação pode estar vindo de outra tabela.

3.  **A coluna address (endereço) possui uma constraint . Qual tipo de constraint seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?**
    
    NOT NULL pois assim será garantido que as linhas dessa coluna não fiquem em branco.


###### Temos aqui uma outra tabela:
![Conteúdo da tabela `city`](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/table2-bc817500d0add9d388501e776cdd26d6.png)

1. **Que tipo de constraint a coluna city_id possui?**
    
    PRIMARY KEY

2. **Qual é o motivo de a coluna country_id não possuir nomes de country (país)? Ela é algum tipo de chave primária ou estrangeira?**
    
    Ela não possui o nome dos países pois essa informação vem de outra tabela. Sendo assim provavelmente ela possui o constraint FOREIGN KEY.

###### Na tabela a seguir:
![Conteúdo da tabela `film`](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/table3-dfbcb99a6654c108ca5f6258e7a3dcd1.png)

1. **Qual coluna possui uma primary key ?**
    
    A coluna `film_id`.

2. **Qual coluna possui uma foreign key ?**
    
    A coluna `category_id`.

