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
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const coingecko_1 = require("./coingecko");
const imput_1 = require("./imput");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let price = yield (0, coingecko_1.getPrice)();
        return Number(price);
    });
}
function register() {
    return __awaiter(this, void 0, void 0, function* () {
        const currentDate = new Date();
        const currentDateEdited = (0, imput_1.convertDate)(currentDate);
        const id = Date.now();
        const value = yield run();
        let currentValue = {
            id: id,
            date: currentDateEdited,
            coin: "bitcoin",
            value: value
        };
        console.log(currentValue);
        (0, fs_1.appendFileSync)("./values/values.txt", JSON.stringify(currentValue) + "\n");
        console.log("¡Valor de la moneda guardado exitosamente! A ver si levanta de una vez.");
    });
}
register();
