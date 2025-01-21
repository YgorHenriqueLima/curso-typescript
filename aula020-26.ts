abstract class Conta { 
    private readonly numero:number;
    protected titular:string;
    protected saldoconta:number;

    constructor(titular:string){
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0
    }

    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1;
    }

    protected info():void{
        console.log(`numero: ${this.numero}`);
        console.log(`titular: ${this.titular}`);
    }
    get saldo():number{
        return this.saldoconta;
    }
    
    public deposito(valor:number):void{
        if(valor < 0){
            console.log("valor inválido");
            return;
        }
        this.saldoconta+=valor;
        console.log(`depositando valor de R\$${valor}`);
    }
    
    public saque(valor:number):void{
        if(valor < 0){
            console.log("valor inválido");
            return;
        }
        if(valor <= this.saldoconta){
            this.saldoconta-=valor;
            console.log(`sacando valor de R\$${valor}`)
        }else{
            console.log("saldo insuficiente")
        }
    }
}

interface Tributos{
    baseCalculo:number;
    CalcularTrib(taxa:number):number;
}

class ContaPF extends Conta implements Tributos{
    cpf:number;
    baseCalculo=10;
    
    constructor(cpf:number, titular:string){
        super(titular);
        this.cpf = cpf;
        console.log("conta PF criada para " + this.titular)
    }
    
    CalcularTrib(taxa: number): number {
        return taxa*this.baseCalculo;
    }

    info(){
        super.info();
        console.log(`cpf:${this.cpf}`);
        console.log("-----------------------")
    }

    public deposito(valor: number): void {
        if(valor > 1000){
            console.log("valor de depósito muito grande para este tipo de conta");
        }else{
            super.deposito(valor);
        }
    }

    public saque(valor: number): void {
        if(valor > 1000){
            console.log("valor de saque muito grande para este tipo de conta");
        }else{
            super.saque(valor);
        }
    }
}

class ContaPJ extends Conta{
    cnpj:number;
    
    constructor(cnpj:number, titular:string){
        super(titular);
        this.cnpj = cnpj;
        console.log("conta PJ criada para " + this.titular);
    }

    info(){
        super.info();
        console.log(`cnpj:${this.cnpj}`);
        console.log("--------------------------")
    }

    public deposito(valor: number): void {
        if(valor > 10000){
            console.log("valor de depósito muito grande para este tipo de conta");
        }else{
            super.deposito(valor);
        }
    }

    public saque(valor: number): void {
        if(valor > 10000){
            console.log("valor de saque muito grande para este tipo de conta");
        }else{
            super.saque(valor);
        }
    }
    
}

/*const conta1 = new Conta(12345678,"joao carlos")
conta1.info()*/
const conta1 = new ContaPF(11122223392,"fabrício pereira");
//conta1.info()
conta1.deposito(1000);
conta1.saque(100);
console.log(conta1.saldo);

const conta2 = new ContaPJ(11133344483,"empresa.dev");
//conta2.info()

//const conta3 = new Conta("titular");


