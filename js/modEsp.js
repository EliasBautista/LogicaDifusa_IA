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

function sumarFilas(arr){
	let sum = []
	console.log(arr.length)
	for (let i = 0; i < arr.length; i++){
		let fila = 0
		for (let j = 0; j < 15; j++) {
			fila = fila + parseFloat(arr[i][j])
		}
		sum.push(fila.toFixed(2))
	}
	return sum
}

function getRangeValues(id){
	var value = document.getElementById(id).value;
	return value;
}

function parseEnfermedad(arr){
	let arrReturn = []
	let arrFinal = []
	let arrEnf = []
	for (i = 1; i <= 10; i++){
		let arrTemp = []
		let msg = document.querySelector('.enfermedadCheck'+i).checked;
		if(msg == true){
			for (let j = 1; j <= 15; j++){
				if(arr[j-1] < enfermedades[i-1][j]){
					arrTemp.push( arr[j-1] )
				}else{
					arrTemp.push( enfermedades[i-1][j] )
				}
			}
			arrEnf.push(enfermedades[i-1][0])
		}
		if (arrTemp.length === 0){
			continue;
		}
		arrFinal.push(arrTemp)
	}
	arrReturn.push(sumarFilas(arrFinal))
	arrReturn.push(arrEnf)

	return arrReturn
}


function diagnostico(){
	let name = document.getElementById("nombre_campo").value
	let nombre_span = document.getElementById("nombre")

	nombre_span.innerHTML = name

	var arr = []
	let part1 = []
	let part2 = []
	for (let i = 1; i <= 15; i++){
		arr.push(getRangeValues("slideRange"+i))
	}

	let finArr = parseEnfermedad(arr)
	let half =  (finArr.length / 2)
	let resCanv = document.getElementById('resultadoCanv')
	let resCanv2 = document.getElementById('resultadoCanv2')

	for (let i = 0; i < half; i++){
		part1.push(finArr[i])
		console.log(finArr[i])
	}
	for (let i = half; i < finArr.length; i++){
		part2.push(finArr[i])
	}

	console.log(part1)

	resCanv.innerHTML = part2
	resCanv2.innerHTML = part1
}