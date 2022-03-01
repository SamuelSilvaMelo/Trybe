**Exercício 1:** Dado um array com os seguintes elementos `["zebra", "macaco", "elefante", "arara", "javali"]`, após duas iterações utilizando _bubble sort_, como estaria este array?

**RESPOSTA:**

```py
# Primeiro loop
        ↷
["zebra", "macaco", "elefante", "arara", "javali"]
                  ↷
["macaco", "zebra", "elefante", "arara", "javali"]
                              ↷
["macaco", "elefante", "zebra", "arara", "javali"]
                                       ↷
["macaco", "elefante", "arara", "zebra", "javali"]

["macaco", "elefante", "arara", "javali", "zebra"]

# Segundo loop
          ↷
["macaco", "elefante", "arara", "javali", "zebra"]
                    ↷
["elefante", "macaco", "arara", "javali", "zebra"]
                              ↷
["elefante", "arara", "macaco", "javali", "zebra"]

["elefante", "arara", "javali", "macaco", "zebra"]
```
