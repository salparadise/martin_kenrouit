import { readFile, readFileSync } from "fs"

export async function createArray(info: string): Promise<any[]> {
    const fileBuffer: Buffer = await readFileSync(info)
    const arrayOfEntries: any[] = fileBuffer.toString().split("\n")
    const jsonContent: any[] = arrayOfEntries.map((c: string) => JSON.parse(c))

    return jsonContent
}

export function buildTable(data: any[]): void {
    let table = document.getElementById("mitabla")

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