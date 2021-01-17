function damecarta() {
    let carta = Math.floor(Math.random() * (9) + 4);
    return carta
}

const rl = require("readline-sync");
let pregunta;
let primeracarta = 0;
let valorcarta = 0;
let sumacartas = 0;

do {
    primeracarta = damecarta();
    while(primeracarta == 8 || primeracarta == 9){
       
        primeracarta = damecarta();
       
        
    }

    console.log("La carta obtenida es " + primeracarta);
    
    if (primeracarta == 10 || primeracarta == 11 || primeracarta == 12) {
        valorcarta = 0.5;
    } else {
        valorcarta = primeracarta;
    }

    sumacartas += valorcarta;
    console.log("Tu valor acumulado es : " + sumacartas);
    pregunta = rl.question("Quieres otra carta?");
    pregunta = pregunta.toUpperCase();
    
    
    if(sumacartas> 7.5){
        console.log("No puedo darte mas cartas, porque tu valor es superior a 7.5");
    }

    
}
while (pregunta != "NO" && sumacartas <= 7.5) 