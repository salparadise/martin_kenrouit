import { register } from "./coingecko"
import { buildTable, createArray } from "./index_tp_html"

window.onload = async function() {
    const array: any[] = await createArray("./values.txt")
    register()
    await buildTable(array)
}

// async function run(): Promise<number> {
//     let price: number = await getPrice()
//     register()
//     buildTable(await createArray("src/values.txt"))
//     return Number(price)
// }



