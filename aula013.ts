function soma(n1:number=0,n2:number=0):number{
    return n1 + n2;
}
console.log(soma(10,567));

function novoUsuario(user:string, pass:string, nome?:string):void{
    console.log(`User: ${user}`);
    console.log(`Senha: ${pass}`);
    console.log(`Nome: ${nome}`);
}

novoUsuario("zlimaKode","218029");