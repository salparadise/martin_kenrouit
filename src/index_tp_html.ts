import { readFile, readFileSync } from "fs"

export async function createArray(info: string): Promise<any[]> {
    let array = (await readFileSync(info)).toString().split("\n")
    console.log(array)
    return array
}

export function buildTable(data: any[]): void {
    let table = document.getElementById("mitabla")
    // let col1: string = Object.keys(data)[0]
    // let col2: string = Object.keys(data)[1]
    // let col3: string = Object.keys(data)[2]
    // let col4: string = Object.keys(data)[3]

    for(let i = 0; i < data.length; i++){
        let row: string = `<tr>
                                <td>${data[i].id}</td>
                                <td>${data[i].date}</td>
                                <td>${data[i].coin}</td>
                                <td>${data[i].value}</td>
                           </tr>`
        table!.innerHTML = table!.innerHTML + row
    }
}