# README

## Despliegue de la Aplicación

Este documento proporciona los requisitos de instalación y los pasos necesarios para ejecutar la aplicación. La aplicación está desarrollada con Node.js, Express, React.js, y Vite.

## Requisitos de Instalación

1. **Node.js**: Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina. Puedes verificarlo ejecutando `node -v` y `npm -v` en tu terminal.

2. **npm**: Node Package Manager (npm) se incluye con Node.js. Asegúrate de tener la última versión de npm.

## Instalación

1. **Clonar el Repositorio**

   Clona el repositorio de la aplicación en tu máquina local:

   ```bash
   git clone https://github.com/camilomvm/crud-app-prueba.git
   cd backend o frontend
   usar comando npm run dev para iniciar proyectos en fase de desarrollo

2. **Instalar Dependencias**

Navega a la raíz del proyecto y ejecuta el siguiente comando para instalar las dependencias: npm i


## Mejores Prácticas
**Saneamiento de Entradas en el Backend**

Para prevenir inyecciones de SQL y otros ataques, se han implementado técnicas de saneamiento en el backend utilizando Express.js. Esto incluye la validación y el filtrado de entradas de usuario antes de procesarlas.

**Patrón de Diseño DAO**

El patrón de diseño DAO (Data Access Object) se ha utilizado para separar la lógica de acceso a datos de la lógica de negocio. Esto ayuda a mantener el código limpio y facilita el mantenimiento y la prueba de las operaciones de acceso a datos.

**Desarrollo Frontend con React.js y Vite**

La aplicación frontend se ha desarrollado utilizando React.js para una interfaz de usuario interactiva y Vite para un entorno de desarrollo rápido y eficiente. Las dependencias se manejan a través de npm.

## Seguridad
**Protección de Datos Sensibles**

Los datos sensibles, como las claves secretas y las URL de la base de datos, se almacenan en un archivo .env y se cargan en el entorno de la aplicación.

**Autenticación y Autorización**

Se han implementado mecanismos de autenticación y autorización en el backend para proteger las rutas y los datos. Asegúrate de utilizar tokens seguros y técnicas de cifrado para las credenciales.

**Validación de Datos**

La validación de datos se realiza tanto en el frontend como en el backend para prevenir entradas maliciosas y garantizar la integridad de los datos.

## Nota

- Se proporciona scripts para la creación de las tablas necesarias para correr el backend en postgreSQL
- crear base de datos en postgresSQL y llamarla COMPANY_BD
