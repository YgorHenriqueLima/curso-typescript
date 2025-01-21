"use strict";
const obj = {
    cor1: "azul",
    cor2: "Amarelo",
    cor3: "cinza",
    cor4: "ciano"
};
const { cor1, cor2, cor3, cor4 } = obj;
console.log(cor1, cor2, cor3, cor4);
let [num1 = 0, num2 = 0, ...num3] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(num1, num2);
console.log(num3);
let texto = "curso de javascript";
let [...t] = texto.split(" ");
console.log(t);
