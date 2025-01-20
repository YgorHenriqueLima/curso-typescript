class Computador{
    /*propriedades*/
    nome:string;
    ram:number;
    cpu:number;
    ligado:boolean;

    constructor(nome:string,ram:number,cpu:number){
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false
    }
}

const comp1 = new Computador("baratão",8,5);
const comp2 = new Computador("DaNasa",128,1000);
const comp3 = new Computador("Gamer",64,100);
console.log(comp1)
console.log(comp2)
console.log(comp3)
