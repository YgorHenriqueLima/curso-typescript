interface curso{
    titulo:string;
    des:string;
    aulas:number;
    maxAluno:number;
    iniciarCurso(teste:string):void;
}


let curso1:curso;
let curso2:curso;

curso1={
    titulo:"TypeScript",
    des:"curso de TypeScript",
    aulas:100,
    maxAluno:50,
    iniciarCurso():void{
        console.log("iniciando o curso " + this.titulo);
    }

};

curso2={
    titulo:"JavaScript",
    des:"curso de JavaScript",
    aulas:200,
    maxAluno:80,
    iniciarCurso():void{
        console.log("iniciando o curso " + this.titulo);
    }
};

console.log(curso1,curso2)