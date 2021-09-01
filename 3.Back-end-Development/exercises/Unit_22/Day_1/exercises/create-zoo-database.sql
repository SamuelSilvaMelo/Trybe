CREATE DATABASE IF NOT EXISTS zoologico;

USE zoologico;

CREATE TABLE animal (
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  especie VARCHAR(50) NOT NULL,
  sexo VARCHAR(20) NOT NULL,
  idade SMALLINT NOT NULL,
  localizacao VARCHAR(100)
);

CREATE TABLE cuidador (
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
);

CREATE TABLE gerente (
  gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
);

CREATE TABLE cuidador_animal (
	cuidador_id INT NOT NULL,
    animal_id INT NOT NULL,
    FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animal(animal_id)
);

CREATE TABLE gerente_cuidador (
	gerente_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id)
);
