-- Script para crear la base de datos y tablas del sistema de clientes

CREATE DATABASE clientes_db;

\c clientes_db;

CREATE TABLE tipo_cliente (
    id   SERIAL PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL
);

INSERT INTO tipo_cliente (descripcion) VALUES
    ('Grandes Clientes'),
    ('Clientes SRL'),
    ('Consumidores Finales');

CREATE TABLE clientes (
    id              SERIAL PRIMARY KEY,
    cuit            VARCHAR(11)  UNIQUE NOT NULL,
    nombre          VARCHAR(50)  NOT NULL,
    domicilio       VARCHAR(100),
    id_tipo_cliente INTEGER      NOT NULL REFERENCES tipo_cliente(id),
    created_at      TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);
