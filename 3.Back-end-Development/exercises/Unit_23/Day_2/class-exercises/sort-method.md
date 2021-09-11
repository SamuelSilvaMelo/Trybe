### Vamos praticar !

Faça os desafios 1 e 2 abaixo sobre o `sort()` utilizando a coleção `restaurants` criada anteriormente.

1. Ordene alfabeticamente os restaurantes pelo nome (atributo `name`).

```
db.restaurants.find().sort({ name: 1 });
```

2. Ordene os restaurantes de forma descrescente baseado nas avaliações.

```
db.restaurants.find().sort({ rating: -1 });
```

