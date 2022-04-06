//Declaro con el DOM las variables que utilizaré para leer cada valor de las tarjetas html
document.querySelectorAll('button').forEach((arr,index) => arr.addEventListener('click', (e) => botonClick(e,index)));  
const nombre = document.getElementById('nombre');
const button = document.getElementById('btn');

// Inicializo mis variables que utilizaré para implementar la lógica del bot
let turno = 0;
const arrayBotones = [0,0,0,0,0,0,0,0,0];
let arrPosPer = [];

// Pequeña función para obtener el valor de mi input
btn.addEventListener('click', () => {
    console.log(nombre.value);
    nombre.value = "";
})

// función principal que se ejecuta al dar click en el botón del juego
const botonClick = (e, index) => {

    // contador comienza a contar
    turno++;
    
    // parte de los estilos
    const btn = e.target;
    const imagen = turno % 2 ? "url(./assets/img-persona.png)" : "url(./assets/img-bot-px.png)";
    btn.style.padding = '50px';
    btn.style.backgroundImage = imagen;
    btn.style.backgroundSize = 'cover';

    // parte de la lógica
    arrayBotones[index] = turno % 2 ? 1 : 2;
    if(arrayBotones[index] !== 0 && arrayBotones[index] !== 2){
       let rand = getRandom(0,8);
       console.log(rand);
       if(arrayBotones[rand] === 1 || arrayBotones[rand] === 2){
            console.log("es igual");
            console.log(arrayBotones);
       }else{
           arrayBotones[rand] = 2;
       }
    }
}

// Función random para aplicar lo del Bot
const getRandom = (min,max) => Math.floor(Math.random() * (max-min) + min)
