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
exports.register = exports.convertDate = exports.run = void 0;
const coingecko_1 = require("./coingecko");
const fs_1 = require("fs");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let price = yield (0, coingecko_1.getPrice)();
        return price;
    });
}
exports.run = run;
function convertDate(date) {
    let yyyy = date.getFullYear().toString();
    let mm = (date.getMonth() + 1).toString();
    let dd = date.getDate().toString();
    let hh = date.getHours().toString();
    let min = date.getMinutes().toString();
    let mmChars = mm.split('');
    let ddChars = dd.split('');
    let hhChars = hh.split('');
    let minChars = min.split('');
    return yyyy + '/' + (mmChars[1] ? mm : "0" + mmChars[0]) + '/' + (ddChars[1] ? dd : "0" + ddChars[0]) + " - " + (hhChars[1] ? hh : "0" + hhChars[0]) + ":" + (minChars[1] ? min : "0" + minChars[0]);
}
exports.convertDate = convertDate;
function register() {
    let valueRegister = [];
    const currentDate = new Date();
    const currentDateEdited = convertDate(currentDate);
    const id = Date.now();
    let currentValue = {
        id: id,
        date: currentDateEdited,
        coin: "butcoin",
        value: run()
    };
    valueRegister.push(currentValue);
    (0, fs_1.appendFileSync)("./values/values.txt", JSON.stringify(valueRegister) + "\n");
    console.log("¡Valor de la moneda guardado exitosamente! A ver si levanta de una vez.");
}
exports.register = register;
