# Etapa 1: Construcción de la aplicación React
FROM node:18.19.1 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración
COPY package*.json ./

# Instalar las dependencias
RUN npm ci

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Servir la aplicación construida con Nginx
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa de build

COPY --from=build /app/dist /var/www/app

# Exponer el puerto 80
EXPOSE 80

# Ejecutar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
