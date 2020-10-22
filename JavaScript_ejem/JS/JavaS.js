/* Variables*/
//var, let y const
//var-puede ser utilizada en cualquier punto del documento.
//incluso antes de ser definida
 console.log(uno);
 var uno = "cualquiera";
 console.log(uno);
 if(true)
 {
     var x ="verdadero";
 } 
 console.log(x);

 //let- definición de bloque, es variable y no se puede utlizar
 //antes de ser declarada
 let dos = "otrovalor";
 console.log(dos);
 let y="falso";
 if(true)
 {
     let y = "verdadero";
 }
 console.log(y);

 const tres = "igual";

 //VALORES DE VERDADERO Y FALSO

 //Valor falso: undefined, null, 0, ""
 //Valor verdadero: valor diferente a los falso

 let mes;
 mes=10;
 if(mes)
 {
     console.log("es verdadero");
 }
 else
 {
     console.log("es falso");
 }
 //OPERADORES DE IGUAL

 //doble igual - devuelve verdadero si los 2 operandos son iguales
 //triple igual - Devuelve verdadero si los operandos son iguales y mismo tipo

 mes == "10" ? console.log("si") : console.log("no");
 mes === "10" ? console.log("si") : console.log("no");

 //TEMPLATE DE STRING

 let nombre = "Juan";
 let apellido = "Lopez";
 const nacimiento =1998;
 function calculoEdad(nac)
 {
     return 2020 -nac;
 }

 console.log(nombre + " " + apellido + ", su edad " + calculoEdad(nacimiento));

 console.log(`${nombre} ${apellido}, su edad: ${calculoEdad(nacimiento)}`);
 const anios = [2000,2005,2010,2020];
 var edad = anios.map(function(el)
 {
     return 2020-el
 });
 console.log(edad);

 let edadNueva = anios.map(el => 2020 - el);
 console.log(edadNueva);

 edadNueva = anios.map((el,index) => `Edad ${index + 1}: ${2020 - el }`);

/*edadNueva = anios.map(
    (el, index) =>
    {
        const actual = n
    }
)*/
const cuadrado = function (num)
{
    return num*num;
}
console.log(cuadrado(2));
 const cuadrado3 = (num) => num* num;
 console.log(cuadrado3(4));

 const frutas = [{nombre: "Manzana", cantidad: 2},
                 {nombre: "Mora azul",cantidad: 7},
                 {nombre: "fresa", cantidad:9},
                 {nombre: "platano", cantidad:11}]
