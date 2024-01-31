let intentos = 1; 
let listaNumerosSorteados = [];
let parrafo = document.querySelector("p");
let numeroMaximo= 10;



let numeroSecreto= generarNumeroSecreto();
//acá se gebnera un número aleatorio 
function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1
//si ya se sortearoin todos los nnúmeros de la lista

if(listaNumerosSorteados.length == numeroMaximo){
   asignarTextoElemento("p","Todos los números ya se utilizaron");

}else{

        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
    //Si el número generaod está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto()
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function asignarTextoElemento(elemento, texto){

    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto ;

}


function verificarNumero(){
    console.log(intentos)
    let numeroDeUsuario = parseInt(document.getElementById("valorNumero").value);
    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento("p",`acertaste en ${intentos} ${intentos === 1? 'vez': 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");


    }
    // El usuario no acierta 
    else{
        if(numeroDeUsuario> numeroSecreto){
            asignarTextoElemento("p","El número es menor");
        }
        else{
            asignarTextoElemento("p","El número es mayor");
        }
        intentos++;
        limpiarTablero();
    }

    return;
    
}

function limpiarTablero(){
    let vaciarCaja= document.getElementById("valorNumero");
    vaciarCaja.value= "";
    
}
function condicionesIniciales(){
    asignarTextoElemento("h1","Inicial el juego secreto!");
    asignarTextoElemento("p","elige un número entre 1 y 100");  
    numeroSecreto = generarNumeroSecreto();
    intentos=1; 

}
function reiniciarJuego(){
    //limpiar
    limpiarTablero();
     //indicar mensaje de intervalo de números
      //generar número aleatorio
      //inicializar el número de intentos 
    condicionesIniciales();
   
    //deshabiliar el botón de nuevo juegos
    document.getElementById("reiniciar").setAttribute("disabled",true);

}

condicionesIniciales();