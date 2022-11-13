import fetch from "cross-fetch";

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
    
    
    console.log("Moneda consultada: " + token.charAt(0).toUpperCase() + token.slice(1))
    console.log("Valor: " + price)
    
    return price
}

export function getCoin() {
    let coinID: HTMLElement = document.getElementById("coinID")!
    console.log(coinID)
    alert(coinID)
}