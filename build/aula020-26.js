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
    get saldo() {
        return this.saldoconta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log("valor inválido");
            return;
        }
        this.saldoconta += valor;
        console.log(`depositando valor de R\$${valor}`);
    }
    saque(valor) {
        if (valor < 0) {
            console.log("valor inválido");
            return;
        }
        if (valor <= this.saldoconta) {
            this.saldoconta -= valor;
            console.log(`sacando valor de R\$${valor}`);
        }
        else {
            console.log("saldo insuficiente");
        }
    }
}
class ContaPF extends Conta {
    cpf;
    baseCalculo = 10;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log("conta PF criada para " + this.titular);
    }
    CalcularTrib(taxa) {
        return taxa * this.baseCalculo;
    }
    info() {
        super.info();
        console.log(`cpf:${this.cpf}`);
        console.log("-----------------------");
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log("valor de depósito muito grande para este tipo de conta");
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log("valor de saque muito grande para este tipo de conta");
        }
        else {
            super.saque(valor);
        }
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
    deposito(valor) {
        if (valor > 10000) {
            console.log("valor de depósito muito grande para este tipo de conta");
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log("valor de saque muito grande para este tipo de conta");
        }
        else {
            super.saque(valor);
        }
    }
}
const conta1 = new ContaPF(11122223392, "fabrício pereira");
conta1.deposito(1000);
conta1.saque(100);
console.log(conta1.saldo);
const conta2 = new ContaPJ(11133344483, "empresa.dev");
