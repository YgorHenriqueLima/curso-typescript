"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coisas = exports.Objeto = void 0;
class Pessoa {
    nome;
    idade;
    altura;
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    conversar() {
        console.log(`${this.nome} está conversando`);
    }
    correr() {
        console.log(`${this.nome} está correndo`);
    }
}
class Objeto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Objeto = Objeto;
const coisas = ["corda", "pilha", "lampada", "cadeira", "ventilador", "notebook", "mouse", "sandália", "televisão"];
exports.coisas = coisas;
exports.default = Pessoa;
