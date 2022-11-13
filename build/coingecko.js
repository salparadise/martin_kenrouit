"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoin = exports.getPrice = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const BASE_URL = "https://api.coingecko.com/api/v3/";
function getPrice(token = "bitcoin", currency = "usd") {
    return __awaiter(this, void 0, void 0, function* () {
        let retries = 5;
        let price = -1;
        while (retries > 0 && price == -1) {
            try {
                const url = BASE_URL + `simple/price?ids=${token}&vs_currencies=${currency}`;
                const res = yield (0, cross_fetch_1.default)(url);
                price = (yield res.json())[token][currency];
            }
            catch (err) {
                retries--;
                console.error(`Error al obtener el precio de la moneda ${token}: ${err}.`);
            }
        }
        //console.log(price)
        console.log("Moneda consultada: " + token.charAt(0).toUpperCase() + token.slice(1));
        console.log("Valor: " + price);
        return price;
    });
}
exports.getPrice = getPrice;
function getCoin() {
    let coinID = document.getElementById("coinID");
    console.log(coinID);
    alert(coinID);
}
exports.getCoin = getCoin;
