"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`numero: ${this.numero}`);
        console.log(`titular: ${this.titular}`);
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log("conta PF criada para " + this.titular);
    }
    info() {
        super.info();
        console.log(`cpf:${this.cpf}`);
        console.log("-----------------------");
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log("conta PJ criada para " + this.titular);
    }
    info() {
        super.info();
        console.log(`cnpj:${this.cnpj}`);
        console.log("--------------------------");
    }
}
const conta1 = new ContaPF(11122223392, "fabrício pereira");
conta1.info();
const conta2 = new ContaPJ(11133344483, "empresa.dev");
conta2.info();
