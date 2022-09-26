//VARIABLES

var edad; //variable declarada y undefined (indefinida)
var edad = 28; //variable  declarada e inicializada 
edad = 28; //variable inicializada

//---------------------//

//VARIABLES COMPLEJAS
 
//variable compleja de tipo objeto;
var persona ={
    nombre: "Sebastian", 
    apellido: "Saez",
    edad: 28 
};

//variable compleja de tipo Array;
var amigos = [ "victor, paula, raquel"];
var edades = [23, 21, 25];
//Dentro de las variables array tambien podemos tener objetos como en el siguiente ejemplo;
var amigos =[
    {nombre: "victor", edad: 23,}, //cada corchete es un objeto, en este caso es un array con tres objetos
    {nombre: "paula", edad: 21}, 
    {nombre: "raquel", edad: 25}
]
//las variables de tipo array funcionan como basde de datos