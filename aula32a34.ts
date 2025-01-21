namespace Veiculo{
    export enum Cores{
        "branco",
        "preto",
        "Vermelho",
        "Amarelo",
        "azul",
        "prata"
    }
    
    abstract class Carro{
        private nome:string;
        private motor:Motores.Motor;
        private cor:string;

        constructor(nome:string,motor:Motores.Motor,cor:Cores){
            this.nome=nome;
            this.motor=new Motores.Motor(3,100);
            this.cor=Cores[cor];
            this.motor=motor;
        }

        public ligar(){
            this.motor.liga=true;
        }
        public desligar(){
            this.motor.liga=false;
        }
        get minhaCor(){
            return this.cor
        }
        get NomeCarro(){
            return this.nome;
        }
        get estouLigado(){
            return (this.motor.liga?"sim":"não");
        }
        get PotenciaCarro(){
            return this.motor.potencia;
        }
    }


    export class CarroEsportivo extends Carro{
        constructor(nome:string,cor:Cores){
            super(nome, new Motores.Motor(6,300,new Motores.Turbo(100)),Cores.Amarelo);
        }
    }
    export class CarroPopular extends Carro{
        constructor(nome:string,cor:Cores){
            super(nome, new Motores.Motor(3,10),Cores.Vermelho);
        }
    }
}

namespace Motores{
    export class Turbo{
        private pot:number;
        constructor(pot:number){
            this.pot=pot;
        }
        get potencia(){
            return this.pot;
        }
    }

    export class Motor{
        private ligado:boolean;
        private cilindros:number;
        private pot:number;
        constructor(cilindros: number, pot:number, turbo?:Turbo){
            this.ligado=false;
            this.cilindros=cilindros;
            this.pot=pot + (turbo ? turbo.potencia : 0);
        }
        
        set liga(ligado:boolean){
            this.ligado=ligado;
        }
        
        get liga(){
            return this.ligado
        }

        get potencia(){
            return this.pot;
        }
    }
}

const carro1 = new Veiculo.CarroEsportivo("rapidX",Veiculo.Cores.Vermelho);
const carro2 = new Veiculo.CarroPopular("DoPoV",Veiculo.Cores.prata);

carro1.ligar()
carro2.ligar()
console.log(carro1);
console.log(carro2);

