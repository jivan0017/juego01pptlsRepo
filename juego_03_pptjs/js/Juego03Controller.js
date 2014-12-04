
// piedra(1) - papel(2) - tijera(3) - lagarto(4) - spok (5)    
// papel
// tijera
// lagarto
// spok

//objeto JSON para almacenar las imagenes del juego
var imagenesJuego03 = {

	imagenPrincipal : "images/piedraPapelTijera.JPG",
	imagenPiedra : "images/piedra.JPG",
	imagenPapel : "images/papel.JPG",
	imagenTijera : "images/tijera.JPG",
	imagenLagarto : "images/lagarto.JPG",
	imagenSpok : "images/spok.JPG"
};


var resultadoJuego = "8";
// variables que por defecto toman un numero cualquiera, en este caso "8" indica que no existe asignacion
var seleccionUsuario = 8;
var seleccionMaquina = 8;
//matriz cargada con los resultados del juego
var matrizJuego = [[2, 0, 1, 1, 0],
				   [1, 2, 0, 0, 1],
				   [0, 1, 2, 1, 0],
				   [0, 1, 0, 2, 1],
				   [1, 0, 1, 0, 2]];

var matrizNombreElementos = ["Piedra", "Papel", "Tijera", "Lagarto", "Spok"];				   

//_-----------------------------------------------------------------------------
// funcion de :   inicio()   al cargar la totalidad de los elementos  D-O-M
function juego03VoidMain(args){
	alert('BIENVENIDO AL TRADICIONAL JUEGO, USUARIO...');
}
//------------------------------------------------------------------------------

function seleccionarOpcionUsuarioModoConsola (){
	seleccionUsuario = prompt('Ingrese una de las opciones:    \n Piedra(1),  Papel(2),  Tijera(3),  Lagarto(4),  Spok(5)');
}

function seleccionarOpcionUsuarioModoInterfazWeb(opcion){
	seleccionUsuario = opcion;

	alert('selecciono: ' + matrizNombreElementos[seleccionUsuario]);

	setTimeout(function(){
		seleccionarOpcionMaquina();
		evaluarSeleccionUsuarioYmaquina(seleccionUsuario,seleccionMaquina);
		alert('seleccion usuario: '+ matrizNombreElementos[seleccionUsuario] + ',  seleccion maquina: ' + matrizNombreElementos[seleccionMaquina] + ', resultado:  ' + resultadoJuego);
	},3000);


	fila1.textContent= "TEST"

}


function seleccionarOpcionMaquina (){
	seleccionMaquina = retornaNumeroAleatorio(0,4);
}

function evaluarSeleccionUsuarioYmaquina(seleccionUsu, seleccionMaq){

	//for (i = 0;  i<5;  i++){
	//	for (j=0;  j<5;  j++){

			if (matrizJuego[seleccionUsu][seleccionMaq] == 1){
				//gana
				resultadoJuego = "GANASTE!  :)";

			}else if (matrizJuego[seleccionUsu][seleccionMaq] == 0){
				//pierde
				resultadoJuego = "PERDISTE  :(";

			}else if (matrizJuego[seleccionUsu][seleccionMaq] == 2){
				//empate
				resultadoJuego = "SE EMPATO EL JUEGO  (°_°)";
			}

		//}
	//}
}

//----------------------------------------------------------------------------------------------------------------
//Genera un número aleatorio entre un rango de enteros
function retornaNumeroAleatorio(minimo, maximo)
{
	//variable que captura una referencia de un numero aleatorio en un rango definido
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}