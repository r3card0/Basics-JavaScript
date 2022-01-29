// función que pueda recibir cualquier objeto como parámetro e 
// imprima todos sus elementos uno por uno



var personas = [
    {nombre:"Bruce Wayen", profesion: "Multimillonario"},
    {nombre:"Hugo Sánchez", profesion: "Futbolista"},
    {nombre:"Shakira", profesion: "Cantante"},
    {nombre:"Gregory House", profesion: "Doctor"},
    {nombre:"Tom Brady", profesion: "Mariscal"},
    {nombre:"Frida Kahlo", profesion: "Artista"},
    {nombre:"J. K. Rowling", profesion: "Escritora"},
];

personas.forEach(function(persona){
    console.log(persona.nombre + " : " + persona.profesion );
});


