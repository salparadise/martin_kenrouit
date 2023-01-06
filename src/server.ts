import {Client, Pool} from "pg"

const CONNECTION_DATA = {
    user: "postgres",
    host: "localhost",
    database: "Valores",
    password: "Q2Rg7k16Hh", //CAMBIAAAAAAR
    port: 5432
}

async function run() {
    await insert("1667171748568", "'2023/12/30 - 13:55'", "'bitcoin'", "20056")
    await select()
    
    //update()
}

run()

async function select() {
    const query = "SELECT * FROM public.valores_btc"

    //Option 1
    const pool = new Pool(CONNECTION_DATA)
    pool.query(query, (err, res) => {
        err ? console.error(err) : console.log(res.rows)
        pool.end()
    })
}

async function insert(idbit: string, date: string, coin: string, value: string) {
    const query = "INSERT INTO public.valores_btc(idbit, date, coin, value)" +  
                  `VALUES(${idbit}, ${date}, ${coin}, ${value})`

    const pool = new Pool(CONNECTION_DATA)
    await pool.query(query, (err, res) => {
        if(err) {
            console.error(err)
        }
        pool.end()
    })
}