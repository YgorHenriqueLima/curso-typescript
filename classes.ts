class Pessoa{
    protected nome:string;
    protected idade:number;
    protected altura:number;
    constructor(nome:string, idade:number, altura:number){
        this.nome=nome;
        this.idade=idade;
        this.altura=altura;
    }

    conversar():void{
        console.log(`${this.nome} está conversando`);
    }
    correr():void{
        console.log(`${this.nome} está correndo`);
    }

}
class Objeto{
    nome:string;
    constructor(nome:string){
        this.nome=nome;
    }
}

const coisas=["corda","pilha","lampada","cadeira","ventilador","notebook","mouse","sandália","televisão"]

export default Pessoa
export {Objeto,coisas};
