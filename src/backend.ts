import express from "express"
import { getInfoFromDatabase } from "./database"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
const port = 3000
var jsonParser = bodyParser.json()
var urlencodedparser = bodyParser.urlencoded( {extended: false})

app.options("*", cors())

app.get("/api/helloWorld", (req: any, res: any) => {
    const data = getInfoFromDatabase()
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json")
    res.send(data)
})

app.post("api/price", jsonParser, (req: any, res: any) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json")
    const price = req.body.price
    console.log(price)
    const output = parseInt(price) * 2
    res.send(JSON.stringify({price: output}))
})

app.listen(port, () => {
    console.log("Todo funciona")
})