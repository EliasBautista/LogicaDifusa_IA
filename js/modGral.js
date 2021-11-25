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

function testing(){
	let name = document.getElementById("nombre_campo").value
	let nombre_span = document.getElementById("nombre")
	let resultado = document.getElementById("resultado")

	nombre_span.innerHTML = name

	var arr = []
	for (let i = 1; i <= 15; i++){
		arr.push(getRangeValues("slideRange"+i))
	}
	parseValues(arr)
	//console.log(arr)
	let testArr = compareResults(arr)
	let max = indexOfMax(compareResults(arr))

	console.log(testArr[max])

	console.log(enfermedades[max][0])
	resultado.innerHTML = enfermedades[max][0].toString()

}