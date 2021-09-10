### Vamos praticar!

Agora que aprendemos sobre os operadores de comparação, vamos sedimentar esses conhecimentos com alguns exercícios de fixação. Para isso, vamos criar um novo banco de dados chamado `business` com uma coleção chamada `restaurants`:

1. Clique neste [link](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/exercise-filter-operators-e8e55183a5af1418a8f0d355ad895d13.js);
2. Copie todo o conteúdo do link e depois abra o **MongoDB Shell**;
3. Utilize o comando `use business` para criar e utilizar este banco de dados;
4. Cole todo o conteúdo no terminal do **MongoDB Shell** e confirme com ENTER ou baixe o arquivo e o execute usando o comando `mongo exercise-filter-operators.js`.

Para confirmar que está tudo funcionando, rode o seguinte comando:

```
db.restaurants.count()
```

O valor retornado deve ser **60**, que é a quantidade de documentos nesta coleção. Agora utilize os operadores de comparação para resolver os desafios de 1 a 5.

1. Selecione e faça a contagem dos restaurantes presentes nos bairros **Queens**, **Staten Island** e **Bronx**. (utilizando o atributo `borough`)

```
db.restaurants.find(
  { borough:
    {
      $in: ["Queens", "Staten Island", "Bronx"]
    }
  }
).count();
```

2. Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo **American**. (utilizando o atributo `cuisine`)

```
db.restaurants.find(
  { cuisine:
    {
      $ne: "American"
    }
  }
).count();
```

3. Selecione e faça a contagem dos restaurantes que possuem avaliação **maior ou igual** a **8**. (utilizando o atributo `rating`)

```
db.restaurants.find(
  {
    rating: { $gte: 8 }
  }
).count();
```

4. Selecione e faça a contagem dos restaurantes que possuem avaliação **menor** que **4**.

```
db.restaurants.find(
  {
    rating: { $lt: 4 }
  }
).count();
```

5. Selecione e faça a contagem dos restaurantes que não possuem as avaliações **5**, **6** e **7**.

```
db.restaurants.find(
  {
    rating:
      {
        $nin: [5, 6, 7]
      }
  }
).count();
```

