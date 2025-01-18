let nvalor:number;

let valor:unknown;
valor = 10;

//nvalor=<number>valor;
nvalor=valor as number;
console.log(nvalor);

/*type casting */
let nvalor2:number;
let valor2:string;

valor2 = "20";
nvalor2 = Number.parseInt(valor2);
console.log(nvalor2);