function logar(user:string, pass:string):void{
    console.log(`user: ${user}`);
    console.log(`Password: ${pass}`);    
}
logar("ygor","123");

function soma2(n1:number,n2:number):number{
    let r = n1+n2;
    return r;
}

let res:number = soma2(10,10);
console.log(res);

/*arrow function*/
const mensagem = (a:number, b:number):number =>{
    return a * b;
}

let m = mensagem(10,10);
console.log(m);

/*funções com rest parameters*/
function somarTudo(...numeros:number[]):number{
    return numeros.reduce((acc,num)=>acc+num,0);
}
let somar_rest = somarTudo(10,10,10,10,10,10,10,10,10,10,10,10,10,10);//....
console.log(somar_rest)