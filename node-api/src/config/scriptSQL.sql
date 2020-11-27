create database libros_examen;
use libros_examen;
 create table libro(
id INT NOT NULL auto_increment,
titulo varchar(80) NOT NULL,
autor varchar(100) NOT NULL,
num_paginas int,
anio int,
primary key(id)
);
 insert into libro(titulo,autor,num_paginas,anio)
 values ('IT', 'Stephen King',600,1998);
 select*from libro;