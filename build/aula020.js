"use strict";
class Conta {
    numero;
    titular;
    saldoconta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`numero: ${this.numero}`);
        console.log(`titular: ${this.titular}`);
    }
    saldo() {
        return this.saldoconta;
    }
    deposito(valor) {
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor >= this.saldoconta) {
            this.saldoconta -= valor;
        }
        else {
            console.log("saldo insuficiente");
        }
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
conta1.deposito(1000);
const conta2 = new ContaPJ(11133344483, "empresa.dev");
conta2.info();
