import { defineConfig } from "drizzle-kit";
import env from "./env";

//archivo que ya luego permite poder ejecutar los comandos para la base de dtaos

export default defineConfig({
    //db connection
    dialect: "postgresql", //"que tipo de base de datos estamos utilizando "
    dbCredentials: {
        url: env.DATABASE_URL //INDICA EL STRING DE CONEXION, aqui estara el numero de peurto, el nombre de la base de datos, el usuario y la contraseña
    },
    //schema
    //definimos donde se encuentra el archivo que define las bases de datos
    schema: "./src/db/schema.ts",
    //migrations
    out: "./migrations",
    //sql verbose logging
    verbose: true,
    //strict mode
    strict: true
});