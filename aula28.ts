function f_teste<T,U>(v:T, r:U):U{
    return r;
}
//console.log(f_teste<number,string>(10, "ola"));
//console.log(f_teste<string,number>("ola",20));
//console.log(f_teste<boolean,boolean>(true,false));

class C_teste<G>{
    public valor:G;
    constructor(valor:G){
        this.valor = valor;
    }
}

const ct1=new C_teste<number>(10);
console.log(ct1.valor);

const ct2 = new C_teste<string>("olá mundo");
console.log(ct2.valor)