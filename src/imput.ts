import { getPrice } from "./coingecko"
import { appendFileSync } from "fs"

export async function run(): Promise<number> {
    let price: number = await getPrice()
    return price
}

export function convertDate(date: Date): string {
    let yyyy: string = date.getFullYear().toString()
    let mm: string = (date.getMonth() + 1).toString()
    let dd: string = date.getDate().toString()
    let hh: string = date.getHours().toString()
    let min: string = date.getMinutes().toString()
  
    let mmChars: string[] = mm.split('')
    let ddChars: string[] = dd.split('')
    let hhChars: string[] = hh.split('')
    let minChars: string[] = min.split('')
  
    return yyyy + '/' + (mmChars[1] ? mm : "0" + mmChars[0]) + '/' + (ddChars[1] ? dd: "0" + ddChars[0]) + " - " + (hhChars[1] ? hh: "0" + hhChars[0]) + ":" + (minChars[1] ? min: "0" + minChars[0])
}

export function register(): void {
    let valueRegister: object[] = []
        const currentDate: Date = new Date()
        const currentDateEdited: string = convertDate(currentDate)
        const id = Date.now()

    let currentValue: object = {
        id: id,
        date: currentDateEdited,
        coin: "butcoin",
        value: run()
    }

    valueRegister.push(currentValue)

    appendFileSync("./values/values.txt", JSON.stringify(valueRegister) + "\n")
    console.log("¡Valor de la moneda guardado exitosamente! A ver si levanta de una vez.")
}
