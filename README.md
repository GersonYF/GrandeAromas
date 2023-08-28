# GrandeAromas
Grande Aromas App Suite

## Cómo poner a funcionar

Antes de poner a funcionar la aplicación se debe tener instalado Postgres y haber creado una Base de Datos llamada ´grandes_aromas_uao´.
Una vez creada esta base de datos proseguir con el siguiente paso a paso.


1. Entrar a la carpeta de /auth
  * Crear una copia de .env.sample y renombrarla .env
  * Ejecutar yarn install
  * Ejecutar yarn start

  Se debe ver un mensaje en la consola que diga info: Servidor corriendo en el puerto 3003

2. Entrar a la carpeta de /users
  * Crear una copia de .env.sample y renombrarla .env
  * Ejecutar yarn install
  * Ejecutar yarn start

  Se debe ver un mensaje en la consola que diga info: Servidor corriendo en el puerto 3001

3. Entrar a la carpeta de /store
  * Crear una copia de .env.sample y renombrarla .env
  * Ejecutar yarn install
  * Ejecutar yarn start

  Se debe ver un mensaje en la consola que diga info: Servidor corriendo en el puerto 3002

4. Una vez se tengan los 3 servicios corriendo se debe hacer lo siguiente como para tener data inicial
  * Entrar a la carpeta de config
  * Ejecutar el siguiente comando `npx sequelize db:seed:all` dentro de esta carpeta.
    * Esto creará dos usuarios de pruebas:
      * john@example.com - password123
      * jane@example.com - password456
  * Cuando se ejecute esto se debe ir a la carpeta de seeders y coger el archivo de inserts y ejecutarlos en Postgres
  uno por uno.

5. Entrar a la carpeta de /ui
  * Ejecutar yarn install
  * Ejecutar yarn start

  Se debe iniciar el navegador con la aplicación corriendo.
  La ruta Dashboard pide autenticación
  La ruta / no pide autenticación




