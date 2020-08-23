/*funcion con las opciones para agregar el audio*/
function options(teclaSeleccionada) { 
    switch(teclaSeleccionada) {
        case "w":
            var audioW = new Audio('sounds/crash.mp3');
            audioW.play();
        break;
    
        case "a":
            var audioA = new Audio('sounds/kick-bass.mp3');
            audioA.play();
        break;

        case "s":
            var audioS = new Audio('sounds/snare.mp3');
            audioS.play();
        break;

        case "d":
            var audioD = new Audio('sounds/tom-1.mp3');
            audioD.play();
        break;

        case "j":
            var audioJ = new Audio('sounds/tom-2.mp3');
            audioJ.play();
        break;

        case "k":
            var audioK = new Audio('sounds/tom-3.mp3');
            audioK.play();
        break;

        case "l":
            var audioL = new Audio('sounds/tom-4.mp3');
            audioL.play();
        break;
        
        default:
            alert("Tecla invalida");
            break;
    }
}

/*Función para obtener de donde proviene el click usando this */
function clickButton() {
    var key = this.innerHTML;
    buttonAnimation(key); /*Animación al hacer click*/
    options(key);
}

/*Funcion para obtener de donde proviene la tecla presionada utilizando event y su atributo .key*/
function keys(event) {
    var teclaSeleccionada = event.key;
    buttonAnimation(teclaSeleccionada);
    options(teclaSeleccionada);  
}

/*Obtenemos el total de veces que existe la clase .drum */
var numberOfDrums = document.querySelectorAll(".drum").length;

/*Seleccionamos toda clase que contenga .drum y con addEVventListener registra el tipo de evento y la función a ejecutar */
for(var i = 0; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", clickButton);
}

document.addEventListener("keypress", keys); /*Agregamos a TODO el documento html el tipo de evento keypress y ejecuta la función keys */

/*Función que crea una animación al presionar un tecla o dar click */
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey); /*guarda la tecla que ha sido presionada y concatena para convertir a clase */
    activeButton.classList.add("pressed"); /*Agrega una clase al elemento */

    setTimeout(function(){ /*Permite realizar una función despúes de un tiempo */
        activeButton.classList.remove("pressed"); /*Eliminamos la clase que se agrego previamente */
    }, 100); /*Segundos */
}