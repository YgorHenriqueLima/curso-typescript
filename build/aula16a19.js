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
    info() {
        console.log(`Nome..: ${this.nome}`);
        console.log(`Ram...: ${this.ram}`);
        console.log(`Cpu...: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "sim" : "não"}`);
        console.log("-----------------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRAM(qtde) {
        if (qtde >= 0 && qtde < 1000) {
            this.ram = qtde;
        }
        else {
            console.log(`a quantidade ${qtde} não é permitido`);
        }
    }
}
const comp1 = new Computador("baratão", 8, 5);
comp1.ligar();
comp1.upRAM(16);
comp1.upRAM(7);
comp1.info();
const comp2 = new Computador("DaNasa", 128, 1000);
comp2.desligar();
comp2.info();
const comp3 = new Computador("Gamer", 64, 100);
comp3.ligar();
comp3.info();
