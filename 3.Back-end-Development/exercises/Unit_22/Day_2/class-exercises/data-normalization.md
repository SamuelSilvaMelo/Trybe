## Exercícios de fixação - normalização de dados

#### Exercício 1: Normalize a tabela a seguir para a 1ª Forma Normal.

Não se preocupe em montar a estrutura em código SQL neste primeiro momento. Crie apenas uma planilha (Excel, Google Sheets, Open Office Calc ou semelhantes) da estrutura esperada.

| Funcionario_id | Nome     | Sobrenome | Contato                  | Contato         | DataCadastro           | Setor                 |
|----------------|----------|-----------|--------------------------|-----------------|------------------------|-----------------------|
| 12             | Joseph   | Rodrigues | jo@gmail.com             | (35)998552-1445 | 2020-05-05 08:50:25    | Administração, Vendas |
| 13             | André    | Freeman   | andre1990@gmail.com      | (47)99522-4996  | 5 de Fevereiro de 2020 | Operacional           |
| 14             | Cíntia   | Duval     | cindy@outlook.com        | (33)99855-4669  | 2020-05-05 10:55:35    | Estratégico, Vendas   |
| 15             | Fernanda | Mendes    | fernandamendes@yahoo.com | (33)99200-1556  | 2020-05-05 11:45:40    | Marketing             |

#### Exercício 2: Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, transforme-a agora na 2ª Forma Normal.

#### Exerício 3: Monte uma query que:

- Crie um banco de dados chamado normalization ;
- Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
- Popule todas as tabelas com os dados fornecidos nos exercícios.

## Respostas

#### Tabela `Funcionarios`

| funcionario_id | nome     | sobrenome | email                    | telefone        | data_cadastro | hora_cadastro |
|----------------|----------|-----------|--------------------------|-----------------|--------------|--------------|
| 12             | Joseph   | Rodrigues | jo@gmail.com             | (35)998552-1445 | 2020-05-05   | 08:50:25     |
| 13             | André    | Freeman   | andre1990@gmail.com      | (47)99522-4996  | 2020-02-05   | null         |
| 14             | Cíntia   | Duval     | cindy@outlook.com        | (33)99855-4669  | 2020-05-05   | 10:55:35     |
| 15             | Fernanda | Mendes    | fernandamendes@yahoo.com | (33)99200-1556  | 2020-05-05   | 11:45:40     |

#### Tabela `setor`

| setor_id | setor_nome    |
|----------|---------------|
| 1        | Administração |
| 2        | Estratégico   |
| 3        | Operacional   |
| 4        | Marketing     |
| 5        | Vendas        |

#### Tabela `Setor_Funcionario`

| funcionario_id | setor_id |
|----------------|----------|
| 12             | 1        |
| 12             | 5        |
| 13             | 3        |
| 14             | 2        |
| 14             | 5        |
| 15             | 4        |

```

CREATE DATABASE normalization;

USE normalization;

CREATE TABLE funcionarios (
  funcionario_id INT NOT NULL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  sobrenome VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  data_cadastro DATE NOT NULL,
  hora_cadastro TIME
);

CREATE TABLE setor (
  setor_id INT PRIMARY KEY AUTO_INCREMENT,
  setor_nome VARCHAR(50) NOT NULL
);

CREATE TABLE setor_funcionario (
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionarios(funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
);

INSERT INTO funcionarios (funcionario_id, nome, sobrenome, email, telefone, data_cadastro, hora_cadastro)
  VALUES
    (12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05', '08:50:25'),
    (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05', null),
    (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05', '10:55:35'),
    (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05', '1:45:40');

INSERT INTO setor (setor_nome)
  VALUES
    ('Administração'),
    ('Estratégico'),
    ('Operacional'),
    ('Marketing'),
    ('Vendas');
    
INSERT INTO setor_funcionario (funcionario_id, setor_Id)
  VALUES
    (12, 1),
    (12, 5),
    (13, 3),
    (14, 2),
    (14, 5),
    (15, 4);
 
 ```

