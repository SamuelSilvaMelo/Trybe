## Vamos praticar

Vamos aplicar as alterações do nosso modelo `Book`, primeiro vamos criar e popular uma coleção com a mesma lista de livros que salvamos no mysql.

```
db.books.insertMany([
    { title: 'A Game of Thrones', author_id: 1 },
    { title: 'A Clash of Kings', author_id: 1 },
    { title: 'A Storm of Swords', author_id: 1 },
    { title: 'The Lord of The Rings - The Fellowship of the Ring', author_id: 2 },
    { title: 'The Lord of The Rings - The Two Towers', author_id: 2 },
    { title: 'The Lord of The Rings - The Return of The King', author_id: 2 },
    { title: 'Foundation', author_id: 3 },
]);
```

1. Refatore o método `getAll` de `models/Book` para utilizar o mongo como banco de dados.
2. Refatore o método `getByAuthorId` de `models/Book` para utilizar o mongo como banco de dados.
