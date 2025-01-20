"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
}
const comp1 = new Computador("baratão", 8, 5);
const comp2 = new Computador("DaNasa", 128, 1000);
const comp3 = new Computador("Gamer", 64, 100);
console.log(comp1);
console.log(comp2);
console.log(comp3);
