enum dias{ 
    domingo=0,
    segunda=1,
    terca=2,
    quarta=3,
    quinta=4,
    sexta=5,
    sabado=6
};
//console.log(dias.domingo);
//console.log(dias['domingo']);
//console.log(dias[1]);
//const d=new Date();
//console.log(d.getDate())
//console.log(dias[d.getDay()])

enum colors{
    white="#fff",
    black="#000",
    red="#f00",
    green="#0f0", 
    blue="#00f"
}

let c:colors = colors.black;
console.log(c);