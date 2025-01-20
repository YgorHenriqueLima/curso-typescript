class Conta {
    protected numero:number;
    protected titular:string;

    constructor(titular:string){
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }

    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1;
    }

    info():void{
        console.log(`numero: ${this.numero}`);
        console.log(`titular: ${this.titular}`);
    }
}

class ContaPF extends Conta{
    cpf:number;
    
    constructor(cpf:number, titular:string){
        super(titular);
        this.cpf = cpf;
        console.log("conta PF criada para " + this.titular)
    }

    info(){
        super.info();
        console.log(`cpf:${this.cpf}`);
        console.log("-----------------------")
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
}

/*const conta1 = new Conta(12345678,"joao carlos")
conta1.info()*/
const conta1 = new ContaPF(11122223392,"fabrício pereira");
conta1.info()

const conta2 = new ContaPJ(11133344483,"empresa.dev");
conta2.info()