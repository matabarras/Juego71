const rl = require("readline-sync");

let numero = Math.floor(Math.random()*(1000-1 + 1) + 1);
let min = 1;
let max = 1000;
console.log(numero);
do{
    
numusuario = rl.questionInt("Que numero crees que es? ");

while(numusuario<min || numusuario>max){
    console.log("Este numero no es valido");
    console.log("Solo acepto numeros de " + min + " a "+ max);
    numusuario = rl.questionInt("Que numero crees que es? ");

}
if(numusuario<numero){
    console.log("Debes introducir un numero mayor");
    min = numusuario;
}else if(numusuario>numero){
    console.log("Debes introducir un numero menor");
    max = numusuario
}
}while(numusuario != numero)
