## Exercícios

Agora vamos abrir o **Workbench** e fazer uma análise prática do banco de dados `sakila` , que já deve estar instalado, caso você tenha feito a instalação do **MySql Workbench** de forma padrão. Caso o banco sakila não esteja disponível, volte até a seção `Restaurando o banco de dados de prática sakila` e siga as instruções listadas. Com esse banco disponível na sua instalação do **Workbench** , sua missão agora é tentar finalizar os exercícios a seguir!

**Exercício 1 :** Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench .

**RESOLUÇÃO:** Na aba `Schemas` clicar em sakila -> Tables -> Escolher uma Table, clicar bom o botão direito e escolher a opção `Select Rows - Limit 1000`;

**Exercício 2 :** Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench .

**RESOLUÇÃO:** Na aba `Schemas` clicar em sakila -> Clicar bom o botão direito em cima de `Tables`e escolher a opção `Create Table...`;

**Exercício 3 :** Feito isso, crie uma tabela com as seguintes restrições:
- Nome da tabela: Filme
- Colunas:
    - FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
    - Descricao - não permite nulos, tipo texto (varchar(100));
    - AnoLancamento - não permite nulos, tipo int;
    - Nota - permite nulos, tipo int;

**RESOLUÇÃO:**
```
CREATE TABLE sakila.Filme (
	FilmeId int PRIMARY KEY AUTO_INCREMENT,
	Descricao varchar(100) NOT NULL,
	AnoLancamento int NOT NULL,
	Nota int
);
```

**Exercício 4 :** Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.

**RESOLUÇÃO:** A coluna `country_id` da tabela `city` faz referência à tabela `country`. 

**Exercício 5 :** Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country ?

**RESOLUÇÃO:** O relacionamento é do tipo N:1 (Muitos para um), pois várias cidades possuem um relacionamento (ligação) com apenas um país.

**Exercício 6 :** Qual tipo de relacionamento a tabela country faz com a tabela city ?

**RESOLUÇÃO:** O relacionamento do tipo 1:N (Um para muitos), pois um país possuí relacionamento (ligação) com várias cidades.

**Exercício 7 :** Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.

**RESOLUÇÃO:**
1. 1:N - actor -> film_actor
2. N:1 - language -> film
3. 1:N - film -> language
