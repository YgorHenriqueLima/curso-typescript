"use strict";
var Veiculo;
(function (Veiculo) {
    let Cores;
    (function (Cores) {
        Cores[Cores["branco"] = 0] = "branco";
        Cores[Cores["preto"] = 1] = "preto";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["azul"] = 4] = "azul";
        Cores[Cores["prata"] = 5] = "prata";
    })(Cores = Veiculo.Cores || (Veiculo.Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = new Motores.Motor(3, 100);
            this.cor = Cores[cor];
            this.motor = motor;
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get NomeCarro() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.liga ? "sim" : "não");
        }
        get PotenciaCarro() {
            return this.motor.potencia;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), Cores.Amarelo);
        }
    }
    Veiculo.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 10), Cores.Vermelho);
        }
    }
    Veiculo.CarroPopular = CarroPopular;
})(Veiculo || (Veiculo = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        pot;
        constructor(cilindros, pot, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo ? turbo.potencia : 0);
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculo.CarroEsportivo("rapidX", Veiculo.Cores.Vermelho);
const carro2 = new Veiculo.CarroPopular("DoPoV", Veiculo.Cores.prata);
carro1.ligar();
carro2.ligar();
console.log(carro1);
console.log(carro2);
