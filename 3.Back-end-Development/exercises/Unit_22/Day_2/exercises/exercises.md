# Exercícios

## Exercício 1: Converta a tabela desnormalizada abaixo para a 1ª Forma Normal.

| residencia_id | residencia_locador | tipo        | endereco                              | inquilinos                |
|---------------|--------------------|-------------|---------------------------------------|---------------------------|
| 1             | Doren Fatima       | casa        | Rua Norte Sul, 35, Belo Horizonte, MG | João, Mária, Carlos       |
| 2             | Ramon Jonathan     | apartamento | Av Rodrigues Ramos 950 Salvador, BA   | Sebastião, Alfredo        |
| 3             | Vanderson Judis    | apartamento | Rua Brusque 352, Ipatinga, MG         | Marta, Marizete           |
| 4             | Carolina Rude      | casa        | Av Atlantica, 252, Camboriú, SC       | Latíce, Laísa, Bartolomeu |

### Respostas

#### Residencias

| residencia_id | residencia_locador | tipo        | rua                | numero | Cidade         | Estado |
|---------------|--------------------|-------------|--------------------|--------|----------------|--------|
| 1             | Doren Fatima       | casa        | Rua Norte Sul      | 35     | Belo Horizonte | MG     |
| 2             | Ramon Jonathan     | apartamento | Av Rodrigues Ramos | 950    | Salvador       | BA     |
| 3             | Vanderson Judis    | apartamento | Rua Brusque        | 352    | Ipatinga       | MG     |
| 4             | Carolina Rude      | casa        | Av Atlantica       | 252    | Camboriú       | SC     |

#### Inquilinos

| inquilinos_id | inquilinos_nome | residencia_id |
|---------------|-----------------|---------------|
| 1             | João            | 1             |
| 2             | Mária           | 1             |
| 3             | Carlos          | 1             |
| 4             | Sebastião       | 2             |
| 5             | Alfredo         | 2             |
| 6             | Marta           | 3             |
| 7             | Marizete        | 3             |
| 8             | Letíce          | 4             |
| 9             | Laísa           | 4             |
| 10            | Bartolomeu      | 4             |

## Exercício 2: Converta a tabela desnormalizada abaixo (que já está nos padrões da 1ª Forma Normal) para a 2ª Forma Normal.

| heroi_id | heroi        | liga           | universo | criador     | criador_idade |
|----------|--------------|----------------|----------|-------------|---------------|
| 1        | Homem Aranha | Avengers       | Marvel   | Stan Lee    | 95            |
| 2        | Jean Grey    | X-Men          | Marvel   | Gardner Fox | 75            |
| 3        | Flash        | Justice-League | DC       | Bill Finger | 60            |
| 4        | Batman       | Justice-League | DC       | Len Wein    | 69            |

### Respostas

#### Herois 

| heroi_id | heroi        | liga_id | criador_id |
|----------|--------------|---------|------------|
| 1        | Homem Aranha | 1       | 1          |
| 2        | Jean Grey    | 2       | 2          |
| 3        | Flash        | 3       | 3          |
| 4        | Batman       | 3       | 4          |

#### Universo

| universo_id | universo |
|-------------|----------|
| 1           | Marvel   |
| 2           | DC       |

#### Liga

| liga_id | liga           | universo_id |
|---------|----------------|-------------|
| 1       | Avengers       | 1           |
| 2       | X-Men          | 1           |
| 3       | Justice-League | 2           |

#### Criador

| criador_id | criador     | criador_idade |
|------------|-------------|---------------|
| 1          | Stan Lee    | 95            |
| 2          | Gardner Fox | 75            |
| 3          | Bill Finger | 60            |
| 4          | Len Wein    | 69            |

## Exercício 3: Agora, converta essa outra tabela (que já está nos moldes das duas primeiras formas) para a 3ª Forma Normal.

| filme_id | genero_id | genero            | valor_entrada |
|----------|-----------|-------------------|---------------|
| 1        | 1         | Ação              | 27.90         |
| 2        | 2         | Biográfico        | 30.70         |
| 3        | 2         | Biográfico        | 26.25         |
| 4        | 3         | Comédia           | 17.80         |
| 5        | 4         | Drama             | 21.50         |
| 6        | 4         | Drama             | 18.00         |
| 7        | 5         | Comédia romântica | 15.75         |

### Respostas

#### Filmes

| filme_id | genero_id | valor_entrada |
|----------|-----------|---------------|
| 1        | 1         | 27.90         |
| 2        | 2         | 30.70         |
| 3        | 2         | 26.25         |
| 4        | 3         | 17.80         |
| 5        | 4         | 21.50         |
| 6        | 4         | 18.00         |
| 7        | 5         | 15.75         |

#### Generos

| genero_id | genero            |
|-----------|-------------------|
| 1         | Ação              |
| 2         | Biográfico        |
| 3         | Comédia           |
| 4         | Drama             |
| 5         | Comédia romântica |

