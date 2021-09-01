## Identificando as Entidades

1. Animal;
2. Cuidador;
3. Gerente;
4. Cuidador e Animal;
5. Gerente e cuidador.

## Identificando os Atributos

##### Animal
1.1. animal_id;

1.2. nome;

1.3. espécie;

1.4. sexo;

1.5. idade;

1.6. localização.

##### Cuidador

2.1. cuidador_id;

2.2. nome.
	
##### Gerente

3.1. gerente_id;

3.1. nome.
	
##### Cuidador e Animal

4.1. cuidador_id;

4.2. animal_id.
	
##### Gerente e cuidador

5.1. gerente_id;

5.2. cuidador_id.
  
## Identificando Relacionamentos

- Um animal pode ter vários cuidadores, assim como um cuidador pode ser responsável por vários animais N:N;
- Cada cuidador possui um gerente 1:1;
- Cada gerente é responsável por vários cuidadores 1:N.

