# Usa la imagen de Node.js
FROM node:22

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json e instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el código fuente
COPY . .

# Compila la aplicación de React
RUN npm run build

# Usa un servidor web como nginx para servir el frontend en producción
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expone el puerto 80 para nginx
EXPOSE 80

# Comando por defecto de nginx
CMD ["nginx", "-g", "daemon off;"]
