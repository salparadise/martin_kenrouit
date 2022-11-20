import { readFileSync } from "fs";
import { runInContext } from "vm";
import { getPrice } from "./coingecko";

window.onload = async function() {
    await generateTable()
}

// run()

// async function run() {
//     const table = await generateTable()
//     console.log(table)
// }

async function generateTable(): Promise<string> {
    const fileBuffer: Buffer = await readFileSync("values.txt")
    const tableContent: any[] = fileBuffer.toString().split("\n")
    const jsonContent: any[] = tableContent.map((c: string) => JSON.parse(c))

    return buildTable(jsonContent)
}
/**
 * 
 * @param tableContent Needs to have 3 keys
 * @returns 
 */
function buildTable(tableContent: any[]): string {
    let table: string = ""
    table += "<table>"

    table += "<thead>"

    table += "<tr>"
    table += "<th>id</th>"
    table += "<th>Date</th>"
    table += "<th>Coin</th>"
    table += "<th>Price</th>"
    table += "<tr>"

    table += "</thead>"

    table += "<tbody>"


    for (let i = 0; i < tableContent.length; i++) {
        table += "<tr>"
        table += `<td>${tableContent[i].id}</td>`
        table += `<td>${tableContent[i].date}</td>`
        table += `<td>${tableContent[i].coin}</td>`
        table += `<td>${tableContent[i].value}</td>`
        table += "</tr>"
    }


    table += "</tbody>"

    table += "</table>"

    return table
}

document.getElementById("getPrice")!.onclick = getPriceFromCoingecko

async function getPriceFromCoingecko() {
    const price = await getPrice("")
    return price
    // Llama a la funcion que busca el precio en coingeck
    // Devuelve el precio
}
