## Exercício Bônus.
### Exercício 1: Para realizar as tarefas do 1 ao 4, restaure o seguinte banco de dados:

```
DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);

INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```

Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos deste [link](https://creativecommons.org/licenses/by-sa/3.0/).

1.1. Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT .
```
SELECT Provider, Price FROM PiecesProviders.Provides
WHERE Provider = 'RBT';
```

1.2. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
```
SELECT * FROM PiecesProviders.Provides
ORDER BY Price DESC
LIMIT 5;
```

1.3. Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
```
SELECT Provider, Price FROM PiecesProviders.Provides
ORDER BY Price DESC
LIMIT 4 OFFSET 3;
```

1.4. Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL . Ordene o resultado pelos preços das peças de forma decrescente.
```
SELECT * FROM PiecesProviders.Provides
WHERE Provider = 'HAL'
ORDER BY Price DESC;
```

1.5. Escreva uma query para exibir por quantas empresas a peça 1 é provida.
```
SELECT DISTINCT COUNT(Provider) FROM PiecesProviders.Provides
WHERE Piece = '1';
```

### Exercício 2 : Usando WHERE , faça os exercícios deste [link](https://www.w3schools.com/sql/exercise.asp?filename=exercise_where1).

2.1. Select all records where the City column has the value "Berlin".
```
SELECT * FROM Customers
WHERE city = 'Berlin';
```

2.2. Use the NOT keyword to select all records where City is NOT "Berlin".
```
SELECT * FROM Customers
WHERE NOT City = 'Berlin';
```

2.3. Select all records where the CustomerID column has the value 32.
```
SELECT * FROM Customers
WHERE CustomerID = 32;
```

2.4. Select all records where the City column has the value 'Berlin' and the PostalCode column has the value 12209.
```
SELECT * FROM Customers
WHERE City = 'Berlin'
AND PostalCode = 12209;
```

2.5. Select all records where the City column has the value 'Berlin' or 'London'.
```
SELECT * FROM Customers
WHERE City = 'Berlin'
OR City = 'London';
```

### Exercício 3: Aplicando Restrições, faça os exercícios deste [link](https://sqlbolt.com/lesson/select_queries_with_constraints).

3.1. Find the movie with a row id of 6
```
SELECT * FROM movies
WHERE Id = 6;
```

3.2. Find the movies released in the years between 2000 and 2010
```
SELECT * FROM movies
WHERE Year BETWEEN 2000 AND 2010;
```

3.3. Find the movies not released in the years between 2000 and 2010
```
SELECT * FROM movies
WHERE Year NOT BETWEEN 2000 AND 2010;
```

3.4. Find the first 5 Pixar movies and their release year
```
SELECT * FROM movies
LIMIT 5;
```

### Exercício 4: Exercícios de comparação de valores. Faça os exercícios deste [link](https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial).

4.1. Observe the result of running this SQL command to show the name, continent and population of all countries.

```
SELECT name, continent, population FROM world;
```

4.2. Show the name for the countries that have a population of at least 200 million. 200 million is 200000000, there are eight zeros.

```
SELECT name FROM world
WHERE population > 200000000;
```

4.3. Give the `name` and the per **capita GDP** for those countries with a `population` of at least 200 million.

```
SELECT name, GDP/population FROM world
WHERE population > 200000000;
```
4.4. Show the `name` and `population` in millions for the countries of the `continent` 'South America'. Divide the population by 1000000 to get population in millions.

```
SELECT name, population/1000000 FROM world
WHERE continent = 'South America';
```

4.5. Show the `name` and `population` for France, Germany, Italy

```
SELECT name, population FROM World
WHERE name = 'France'
OR name = 'Germany'
OR name = 'Italy';
```

4.6. Show the countries which have a `name` that includes the word 'United'

```
SELECT Name FROM World
WHERE name LIKE '%United%';
```

4.7. Two ways to be big: A country is **big** if it has an area of more than 3 million sq km or it has a population of more than 250 million.
**Show the countries that are big by area or big by population. Show name, population and area.**

```
SELECT name, population, area FROM World
WHERE area > 3000000
OR population > 250000000;
```

4.8. **Exclusive OR (XOR). Show the countries that are big by area (more than 3 million) or big by population (more than 250 million) but not both. Show name, population and area.**
- Australia has a big area but a small population, it should be included.
- Indonesia has a big population but a small area, it should be included.
- China has a big population and big area, it should be excluded.
- United Kingdom has a small population and a small area, it should be excluded.

```
SELECT name, population, area FROM World
WHERE area > 3000000
AND NOT population > 250000000
OR NOT area > 3000000
AND population > 250000000;
```

4.9. Show the `name` and `population` in millions and the GDP in billions for the countries of the `continent` 'South America'. Use the ROUND function to show the values to two decimal places.

**For South America show population in millions and GDP in billions both to 2 decimal places.**

```
SELECT name, ROUND(population/1000000, 2), ROUND(GDP/1000000000, 2) continent FROM World
WHERE continent = 'South America';
```

4.10. Show the `name` and per-capita GDP for those countries with a GDP of at least one trillion (1000000000000; that is 12 zeros). Round this value to the nearest 1000.

**Show per-capita GDP for the trillion dollar countries to the nearest $1000.**

```
SELECT name, ROUND(GDP/population, -3) FROM World
WHERE GDP > 1000000000000;
```

4.11. Greece has capital Athens.
Each of the strings 'Greece', and 'Athens' has 6 characters.

**Show the name and capital where the name and the capital have the same number of characters.**

- You can use the LENGTH function to find the number of characters in a string

```
SELECT name, capital  FROM world
WHERE LEN(name) = LEN(capital);
```

4.12. The capital of Sweden is Stockholm. Both words start with the letter 'S'.

**Show the name and the capital where the first letters of each match. Don't include countries where the name and the capital are the same word.**

- You can use the function LEFT to isolate the first character.
- You can use <> as the NOT EQUALS operator.

```
SELECT name, capital FROM world
WHERE LEFT(name,1) = LEFT(capital,1)
AND name <> capital;
```

4.13. **Equatorial Guinea** and **Dominican Republic** have all of the vowels (a e i o u) in the name. They don't count because they have more than one word in the name.

**Find the country that has all the vowels and no spaces in its name.**

- You can use the phrase name NOT LIKE '%a%' to exclude characters from your results.
- The query shown misses countries like Bahamas and Belarus because they contain at least one 'a'

```
SELECT name FROM world
WHERE name NOT LIKE '% %'
AND name LIKE '%a%'
AND name LIKE '%e%'
AND name LIKE '%i%'
AND name LIKE '%o%'
AND name LIKE '%u%';
```
