class Computador{
    /*propriedades*/
    private nome:string;
    private ram:number;
    private cpu:number;
    private ligado:boolean;

    constructor(nome:string,ram:number,cpu:number){
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }

    info():void{
        console.log(`Nome..: ${this.nome}`);
        console.log(`Ram...: ${this.ram}`);
        console.log(`Cpu...: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado?"sim":"não"}`);
        console.log("-----------------------------");
    }

    ligar():void{
        this.ligado = true;
    }
    desligar():void{
        this.ligado = false;
    }

    upRAM(qtde:number):void{
        if(qtde >= 0 && qtde <  1000){
            this.ram=qtde;
        
        }
        else{
            console.log(`a quantidade ${qtde} não é permitido`)
        }
    }

}


const comp1 = new Computador("baratão",8,5);
comp1.ligar();
comp1.upRAM(16);
//comp1.upRAM(-100); //quantidade de ram não é permitido
comp1.upRAM(7);
comp1.info();

const comp2 = new Computador("DaNasa",128,1000);
comp2.desligar();
comp2.info();

const comp3 = new Computador("Gamer",64,100);
comp3.ligar();
comp3.info();