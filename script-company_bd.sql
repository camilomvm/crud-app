CREATE TABLE usuarios (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	apellido VARCHAR(50) NOT NULL,
	usuario varchar (50) NOT NULL,
	contraseña VARCHAR (50) NOT NULL,
	rol_id INT CHECK (rol_id IN (1, 2))
)


CREATE TABLE roles (
	id SERIAL PRIMARY KEY,
    rol VARCHAR(50) UNIQUE NOT NULL
)

--importante insertar roles
INSERT INTO roles (rol) values ('administrador')
INSERT INTO roles (rol) values ('usuario')


CREATE TABLE empleado (
 	id SERIAL PRIMARY KEY,
    fecha_ingreso DATE NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    salario NUMERIC(10, 2) NOT NULL
)

CREATE TABLE solicitud (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL,
    descripcion varchar(50) NOT NULL,
    resumen VARCHAR(50),
    id_empleado INT NOT NULL,
    FOREIGN KEY (id_empleado) REFERENCES empleado(id) ON DELETE CASCADE
);


INSERT INTO empleado (fecha_ingreso,nombre,salario) values ('13/08/2024','juan',33.000);
INSERT INTO empleado (fecha_ingreso,nombre,salario) values ('13/08/2024','jose',34.000);
INSERT INTO empleado (fecha_ingreso,nombre,salario) values ('13/08/2024','ramizo',53.000);
INSERT INTO empleado (fecha_ingreso,nombre,salario) values ('13/08/2024','esteban',63.000);
INSERT INTO empleado (fecha_ingreso,nombre,salario) values ('13/08/2024','david',73.000);
INSERT INTO empleado (fecha_ingreso,nombre,salario) values ('13/08/2024','paulo',83.000);
INSERT INTO empleado (fecha_ingreso,nombre,salario) values ('13/08/2024','mauro',03.000);
INSERT INTO empleado (fecha_ingreso,nombre,salario) values ('13/08/2024','antonio',13.000);
INSERT INTO empleado (fecha_ingreso,nombre,salario) values ('13/08/2024','joquin',23.000);
INSERT INTO empleado (fecha_ingreso,nombre,salario) values ('13/08/2024','stiven',33.000);
INSERT INTO empleado (fecha_ingreso,nombre,salario) values ('13/08/2024','pepo',43.000);


INSERT INTO solicitud (codigo,descripcion,resumen,id_empleado) values ('205090','descripcion','resumen',1716);
INSERT INTO solicitud (codigo,descripcion,resumen,id_empleado) values ('205090','descripcion','resumen',1716);
INSERT INTO solicitud (codigo,descripcion,resumen,id_empleado) values ('205090','descripcion','resumen',1716);
INSERT INTO solicitud (codigo,descripcion,resumen,id_empleado) values ('205090','descripcion','resumen',1716);
INSERT INTO solicitud (codigo,descripcion,resumen,id_empleado) values ('205090','descripcion','resumen',1716);
INSERT INTO solicitud (codigo,descripcion,resumen,id_empleado) values ('205090','descripcion','resumen',1716);
INSERT INTO solicitud (codigo,descripcion,resumen,id_empleado) values ('205090','descripcion','resumen',1716);
INSERT INTO solicitud (codigo,descripcion,resumen,id_empleado) values ('205091','descripcion','resumen',1716);
INSERT INTO solicitud (codigo,descripcion,resumen,id_empleado) values ('205091','descripcion','resumen',1716);
INSERT INTO solicitud (codigo,descripcion,resumen,id_empleado) values ('205091','descripcion','resumen',1716);
INSERT INTO solicitud (codigo,descripcion,resumen,id_empleado) values ('205091','descripcion','resumen',1716);
INSERT INTO solicitud (codigo,descripcion,resumen,id_empleado) values ('205091','descripcion','resumen',1716);
INSERT INTO solicitud (codigo,descripcion,resumen,id_empleado) values ('205091','descripcion','resumen',1716);




select *  from empleado 
	select * from solicitud

delete from solicitud 

delete from empleado 


