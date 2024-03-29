import fetch from "cross-fetch"
import { appendFileSync } from "fs"
import { convertDate } from "./imput"
import { insert } from "./server"

const BASE_URL = "https://api.coingecko.com/api/v3/"

export async function getPrice(token: string = "bitcoin", currency: string = "usd"): Promise<number> {
    let retries: number = 5
    let price: number = -1
    while(retries > 0 && price == -1) {
        try {
            const url = BASE_URL + `simple/price?ids=${token}&vs_currencies=${currency}`
            const res = await fetch(url)
            price = (await res.json())[token][currency]
        } catch(err) {
            retries--
            console.error(`Error al obtener el precio de la moneda ${token}: ${err}.`)
        }
    }
    //console.log(price)
    
    
    // console.log("Moneda consultada: " + token.charAt(0).toUpperCase() + token.slice(1))
    // console.log("Valor: " + price)
    
    return price
}

export function getCoin() {
    let coinID: HTMLElement = document.getElementById("coinID")!
    console.log(coinID)
    alert(coinID)
}

export async function registerDB(): Promise<void> {

    const currentDate: Date = new Date()
    const value: number = Math.floor(await getPrice())

    let idbit: string = Date.now().toString()
    let date: string = convertDate(currentDate)
    let coin: string = "bitcoin"
    let valuebit: string = value.toString()

    await insert(idbit, date, coin, valuebit)
    console.log("¡Valor de la moneda guardado exitosamente! A ver si levanta de una vez.")
}

export async function register(): Promise<void> {
    const currentDate: Date = new Date()
    const currentDateEdited: string = convertDate(currentDate)
    const id = Date.now()
    const value: number = await getPrice()

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