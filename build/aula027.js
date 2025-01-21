"use strict";
let curso1;
let curso2;
curso1 = {
    titulo: "TypeScript",
    des: "curso de TypeScript",
    aulas: 100,
    maxAluno: 50,
    iniciarCurso() {
        console.log("iniciando o curso " + this.titulo);
    }
};
curso2 = {
    titulo: "JavaScript",
    des: "curso de JavaScript",
    aulas: 200,
    maxAluno: 80,
    iniciarCurso() {
        console.log("iniciando o curso " + this.titulo);
    }
};
console.log(curso1, curso2);
