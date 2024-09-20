# Usa la imagen base de Node.js
FROM node:22

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias de Node.js
RUN npm install

# Copia el resto del código de tu proyecto al contenedor
COPY . .

# Expone el puerto donde tu backend servirá la aplicación
EXPOSE 5000

# Comando para ejecutar el backend (asegúrate de que tu backend inicie en este comando)
CMD ["node", "server.js"]
