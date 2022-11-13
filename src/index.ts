import { appendFileSync } from "fs"
import { getPrice } from "./coingecko"
import { convertDate } from "./imput"
import { buildTable, createArray } from "./index_tp_html"

async function run(): Promise<number> {
    let price: number = await getPrice()
    register()
    buildTable(await createArray("src/values.txt"))
    return Number(price)
}

async function register(): Promise<void> {
        const currentDate: Date = new Date()
        const currentDateEdited: string = convertDate(currentDate)
        const id = Date.now()
        const value: number = await run()

    let currentValue: object = {
        id: id,
        date: currentDateEdited,
        coin: "bitcoin",
        value: value
    }

    console.log(currentValue)

    appendFileSync("./values/values.txt", JSON.stringify(currentValue) + "\n")
    console.log("¡Valor de la moneda guardado exitosamente! A ver si levanta de una vez.")
}

