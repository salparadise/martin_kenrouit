// import { buildTable, createArray } from "./index_tp_html"
import { register, registerDB } from "./coingecko"
import { insert, select } from "./server"

async function run() {
    // await insert("1667171748568", "'2023/12/30 - 13:55'", "'bitcoin'", "20056")
    // await select()
    await registerDB()
}

run()

// window.onload = async function() {
//     const array: any[] = await createArray("./values.txt")
//     register()
//     await buildTable(array)
// }

// async function run(): Promise<number> {
//     let price: number = await getPrice()
//     register()
//     buildTable(await createArray("src/values.txt"))
//     return Number(price)
// }

// async function run() {
//     register()
// }

// run()

