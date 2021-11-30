<h1> Diagnóstico de enfermedades respiratorias aplicando lógica difusa </h1>

## ¿Cómo funciona?

De acuerdo con los contenidos vistos durante el curso para esta aplicación se aplicaron operaciones entre conjuntos difusos correspondiente al tema de _"Lógica Difusa",_ concretamente se utilizó la intersección de conjuntos y el asignamiento de un porcentaje de confiabilidad que nos permite dar un diagnóstico sencillo. Cuenta con 15 síntomas y 10 enfermedades precargadas.

## Lista de enfermedades 😷

- Gripe
- Rinitis
- Rinosinusitis
- Faringitis
- Amigdalitis
- Bronquitis
- Enfisema pulmonar
- Asma
- Neumonía
- COVID-19

## Lista de síntomas 🤧

- Fiebre
- Tos seca
- Sibilancia
- Disnea
- Cefalea
- Escalofríos
- Mialgia
- Cansancio
- Picor de nariz
- Congestión nasal
- Estornudos
- Epifora
- Garganta irritada
- Tos con flema o sangre
- Náuseas

## Comenzando 🚀

El siguiente extracto del código fuente ayudará a comprender mejor la lógica del proyecto.

_Arreglo de matrices con el fin de almacenar las enfermedades con el valor de ocurrencia asignado a cada síntoma presente en el cuadro médico._
```
let enfermedades = [
    ['Gripe', 0.6, 0.7, 0, 0.7, 0.5, 0.5, 0.2, 0.3, 1, 0.8, 0.9, 0.2, 0.5, 0, 0],
    ['Rinitis', 0.2, 0.8, 0.1, 1, 0.7, 0 ,0, 0, 0.9, 0.8, 0.7, 0.8, 0.5, 0.6, 0.3],
    ['Rinosinusitis', 0.9, 0, 0.6, 1.0, 0.8, 0, 0.5, 0.4, 0.7, 1.0, 0.1, 0.7, 0.1, 0, 0.7],
    ['Faringitis', 0.7, 0.5, 0, 0.1, 0.5, 0, 0.6, 0.4, 0, 0.4, 0, 0, 0.8, 0.2, 0],
    ['Amigdalitis', 0.8, 0.8, 0.1, 0.5, 0.6, 0.2, 0.5, 0.1, 0.3, 0.3, 0, 0, 1.0, 0.5, 0.1],
	['Bronquitis', 0.3, 0.5, 0.6, 0.8, 0, 0.3, 0.3, 0.8, 0, 0.5, 0.4, 0, 0.4, 0.7, 0],
	['Enfisema Pulmonar', 0, 0.5, 0.9, 1.0, 0.6, 0, 0.6, 0.7, 0, 0, 0, 0.2, 0.5, 0.6, 0.4],
	['Asma', 0, 0.6, 0.8, 0.9, 0.2, 0, 0, 0.5, 0.4, 0.2, 0.5, 0.1, 0, 0.6, 0],
	['Neumonía', 0.7, 0.8, 0, 0.8, 0.3, 0.6, 0.2, 0.7, 0, 0.2, 0, 0.1, 0, 0.8, 0.4],
	['COVID-19', 0.8, 0.5, 0, 0.9, 0.9, 0.8, 0.7, 0.8, 0.3, 0.6, 0.5, 0.1, 0.6, 0.2, 0.1]
];
```
_Función para obtener un índice máximo de un Array_
```
function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}
```

_Función para recuperar los valores de la interfaz y convertirlos al rango establecido de comparación_
```
function getRangeValues(id){
	var value = document.getElementById(id).value;
	return value;
}
function parseValues(array){
	for (i = 0; i < array.length; i++) {
		switch (array[i]) {
			case "0":
				array[i] = 0
				break;
			case "1":
				array[i] = 0.1
				break;
			case "2":
				array[i] = 0.2
				break;
			case "3":
				array[i] = 0.3
				break;
			case "4":
				array[i] = 0.4
				break;
			case "5":
				array[i] = 0.4
				break;
			case "6":
				array[i] = 0.6
				break;
			case "7":
				array[i] = 0.7
				break;
			case "8":
				array[i] = 0.8
				break;
			case "9":
				array[i] = 0.9
				break;
			case "10":
				array[i] = 1
				break;
			default:
				console.log("Err in parse");
		}
	}
}
```
_Función para comparar y hacer una intersección del conjunto que ingresa el usuario con las enfermedades precargadas._
```
function sumResults(arr){
	let sumas = []
	for (let i = 0; i < 10; i++){
		let cont = 0
		for (let j = 0; j < 15; j++){
			cont += arr[i][j];
		}
		sumas.push(cont.toFixed(2));
	}
	return sumas;
}

function compareResults(arr){
	arrFinal = []
	for (let i = 0; i < 10; i++){
		let arrTemp = []
		for (let j = 1; j <= 15; j++){
			if(arr[j-1] < enfermedades[i][j]){
				arrTemp.push( arr[j-1] )
			}else{
				arrTemp.push( enfermedades[i][j] )
			}
		}
		arrFinal.push(arrTemp)
	}
	//console.log(arrFinal)
	console.log(sumResults(arrFinal))
	return sumResults(arrFinal)
}
```

## Instalación 🔧

_Clonar el proyecto, la aplicación es funcional en todos los navegadores de forma local_

De igual manera también se puede acceder de forma web, mediante este [link.](https://stoic-northcutt-40d2cf.netlify.app/index.html)

<br/>

## Documentación 📃

_La documentación completa de este proyecto se encuentra en drive mediante el siguiente link_

* [Documentación](https://docs.google.com/document/d/1njgqa94COHIL4qDd9gDQzQOmctfZPfvJfSWw7Ij4rao/edit?usp=sharing) - Aquí puedes descargar la documentación.

_Se puede acceder al manual de usuario desde el siguiente link:_

* [Manual de usuario](https://docs.google.com/presentation/d/1VsZn-2uSvFzGuVwhQP0KArn6gOPitaMt8T4wa9Ao034/edit?usp=sharing) - Aquí puedes descargar el manual de usuario.
<br/>

## Imágenes 💻
<br/>

_Modulo General_

![IA_app](https://raw.githubusercontent.com/EliasBautista/LogicaDifusa_IA/main/img/IA1.png)

_Resultado del Modulo General_
![IA_app](https://raw.githubusercontent.com/EliasBautista/LogicaDifusa_IA/main/img/IA2.png)

_Modulo Específico (se agrega la opción de elegir enfermedades)_

![IA_app](https://raw.githubusercontent.com/EliasBautista/LogicaDifusa_IA/main/img/IA3.png)

_Resultado del Modulo Específico (otorga una ponderación acorde a las enfermedades que dió el usuario)_
![IA_app](https://raw.githubusercontent.com/EliasBautista/LogicaDifusa_IA/main/img/IA4.png)

<br/>
<br/>

## ¿Quienes son los integrantes?

| [<img src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/boy.png" alt="IE / Edge" width="24px" height="24px" />](https://github.com/EliasBautista)</br>Elias Bautista| [<img src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/boy.png" alt="IE / Edge" width="24px" height="24px" />](https://github.com/PaulinaQuintero)</br>Sergio Vázquez| [<img src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/boy.png" alt="Chrome" width="24px" height="24px" />](https://github.com/SuperCS92)</br>Saúl Coronel| [<img src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/boy.png" alt="Safari" width="24px" height="24px" />](https://github.com/AliVillegas95)</br>Hugo Gómez ||
| --- | --- | --- | --- | --- |
| elias.bautistaflores@outlook.com | sergiovazag@gmail.com | SaulCronel@gmail.com | hugogomz10@gmail.com |

<br>
<p align="center">¡GRACIAS POR PROBAR NUESTRA APLICACIÓN!</p>