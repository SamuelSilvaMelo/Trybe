## InsertOne
#### Exercício 1
Agora, crie um documento na **coleção** `products`, no **banco de dados** `sample`, com os seguintes atributos e valores:

```
{
    "productName": "Caixa",
    "price": 20
}
```

**Resposta*:*

```
use sample
db.products.insertOne(
  {
    productName: "Caixa",
    price: 20
  }
);
```

#### Exercício 2
Agora, assuma o controle do `campo _id`, passando um valor qualquer para ele e crie um novo documento com os mesmos atributos e valores do documento anterior.

```
db.products.insertOne(
  {
    _id: 1,
    productName: "Caixa",
    price: 20
  }
);
```

## InsertMany
#### Exercício 1
Insira mais três documentos na coleção products em uma única operação:

```
[
    { "productName": "Lapis", "stock": 10, "price": 20,"status":"A"},
    { "productName": "Tesoura", "price": 5, "status": "B" },
    { "productName": "Borracha", "price": 15, "status": "A" }
]
```

**Resposta:**

```
> db.products.insertMany(
  [
    { "productName": "Lapis", "stock": 10, "price": 20,"status":"A"},
    { "productName": "Tesoura", "price": 5, "status": "B" },
    { "productName": "Borracha", "price": 15, "status": "A" }
  ]
);
```
