let numeros:number[]= [20,30,40];
//let numeros:Array<number|string>=[20,30,40,"ola"];
//let numero:(number|string)[]=[20,30,40];
numeros.push(10);
numeros.unshift(100);

console.log(numeros);

let numeros2:ReadonlyArray<number>=[100,200,300];
numeros2.map((arr)=>{
    console.log(arr)
}) 