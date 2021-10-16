const valor_pi =Math.PI;
var n1=1;
var n2=2;
/* let vs var vs const */

//console.log(valor_a);  index.js:5 Uncaught ReferenceError: Cannot access 'valor_a' before initialization
//console.log(valor_b);  undefined

let valor_a="Carolina";
var valor_b="Carolina";


let r="Hola";
var s="Hola";
const t="Hola";


/* condiciones
if(condition) -else

*/
if(5!=3){
    console.log("Es diferente");
}
else{
    console.log("No es diferente");
}

/* ciclos */

/*
While
For
do while
for(st1;st2;st3)
*/
var init = 0;
for(let i=0; i<12; i++){
    console.log("El valor de init es "+init);
    init++;
}
var init2 = 0;
while(init2<10){
    console.log("el valor de init2 es "+init2);
    init2++;
}

let init3=0;
do{
    init3++;
    console.log("El valor de init3 es"+init3);
}while (init3<10);

// switch
var dia=2;
switch(dia){
    case 1:
        console.log("Lunes, comienzo de semana");
    break;
    case 2:
        console.log("Martes, Ni te cases ni te embarques");
    break;
    case 3:
        console.log("Miercoles, La mitad");
    break;    
}
/*clases
instancias
metodos
atributos
*/
    class Persona {        
        constructor (nombre, apellido, edad){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
    }
var manuel = new Persona("Manuel","Montenegro","35");
console.clear();
/* Arrays*/


console.group("Grupo 1");
console.log(1);
console.log(2);
console.groupEnd();
console.group("Grupo 2");
console.log(3);
console.log(4);
console.groupEnd();


let listadecompra =["Papa","Arroz","Frijol","Zanahoria","Lentejas","Maracuya"]
/*funciones*/

function sumar_dos_numeros(n1,n2){
 return n1*n2;
}
var resultado= sumar_dos_numeros(2,3);

console.log(resultado);

function string_a_evaluacion(valor_string){
    return eval(valor_string);
}

/* ambito de function*/

var numero1=25, numero2=32, nombre ="Vanessa";

    function multiplicar(){
        return numero1*numero2;
    }
    console.group("Para multiplicar con una funcion con variables");
    console.log(multiplicar());
    console.groupEnd();


    function conseguir_puntaje() {
        var numero1 = 22,numero2=24;
        function add(){
            return nombre+ " anotó "+(numero1 + numero2);
        }

        return add();
    }
    
    console.log(conseguir_puntaje());

//   document.write("<h2>Agregado</h2>");

function bienvenida(nombre,colortexto){
    document.write("<FONT color='"+colortexto+"'>");
    document.write("<h1>Hola, "+nombre+"</h1>");
    document.write("</FONT>");

}

bienvenida("Vanessa Rodriguez","yellow");

function pasoPorValor(parametro){
    parametro =25;
    document.write("<br>el valor fue cambiado a 25")

}

var mivariable=433443;
document.write("<br>el valor de la variable pasada fue "+mivariable)

mivariable=23;

document.write("<br>el valor de la variable pasada fue "+mivariable)

mivariable=81;
document.write("<br>el valor de la variable pasada fue "+mivariable)

pasoPorValor(mivariable);

