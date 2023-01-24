import { Client } from "pg"

const DATABASE_NAME = "Valores"
const TABLE = "presios"

const EXISTS_DATABASE_QUERY = `SELECT 'CREATE DATABASE ${DATABASE_NAME}' WHERE EXISTS (SELECT datname FROM pg_database WHERE datname = '${DATABASE_NAME}');`
const CREATE_DATABASE_QUERY = `CREATE DATABASE ${DATABASE_NAME}`
const CREATE_TABLE_PRESIO = `CREATE TABLE IF NOT EXISTS ${TABLE} (
    id_presio serial,
    presio_token VARCHAR(40),
    presio_value real
);`

const CONNECTION_DATA = {
    user: "postgres",
    host: "localhost",
    password: "Q2Rg7k16Hh",
    port: 5432
}

const CONNECTION_DATA_W_DB = {
    ... CONNECTION_DATA,
    database: DATABASE_NAME
}

export const connectDb = async () => {
    try {
        const client = new Client(CONNECTION_DATA)

        await client.connect()
        const existsDatabase = await client.query(EXISTS_DATABASE_QUERY)
        console.log(EXISTS_DATABASE_QUERY)

        if(existsDatabase.rows.length == 0) {
            await client.query(CREATE_DATABASE_QUERY)
        }
        await client.end()

        const client2 = new Client(CONNECTION_DATA_W_DB)
        await client2.connect()
        await client2.query(CREATE_TABLE_PRESIO)
        await client2.end()

    } catch (error) {
        console.log(error)
    }
}

export async function getInfoFromDatabase() {
    const client = new Client(CONNECTION_DATA_W_DB)
    const queryResult = await client.query(`SELECT * FROM public.${TABLE}`)
    await client.end()
    return queryResult
}

export async function setPrice(token: string, price: number) {
    const client = new Client(CONNECTION_DATA_W_DB)
    const queryResult = await client.query(`INSERT INTO public.${TABLE}(presio_token, presio_value) VALUES('${token}', ${price})`)
    await client.end()
    console.log(`Recording prince ${price} for token ${token}`)
}