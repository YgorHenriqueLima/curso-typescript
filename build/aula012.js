"use strict";
function logar(user, pass) {
    console.log(`user: ${user}`);
    console.log(`Password: ${pass}`);
}
logar("ygor", "123");
function soma2(n1, n2) {
    let r = n1 + n2;
    return r;
}
let res = soma2(10, 10);
console.log(res);
const mensagem = (a, b) => {
    return a * b;
};
let m = mensagem(10, 10);
console.log(m);
function somarTudo(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}
let somar_rest = somarTudo(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10);
console.log(somar_rest);
