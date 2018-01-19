//Inventando un idioma con javascript

function traductor(str){
	let translation = str

	//Si la palabra termina en "ar", se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')){
		translation = str.slice(0, -2)
	}

	// Si la palabra incia con Z, se le añade pe al final

	if(str.toLowerCase().startsWith('z')){
		translation+= 'pe'
	}

	// Si la palabra traducida tiene 10 o más letras,
	// se debe partir a la mitad y unir con un guión del medio

	const length = translation.length
	if( length >= 10){
		const firstHalf = translation.slice(0, Math.round(length / 2))
		const secondHalf = translation.slice(Math.round(length / 2))
		translation = `${firstHalf}-${secondHalf}`
	}

	//Si la palabra original es un palindromo,
	//Ninguna regla anterior cuenta y se devuelve
	//la misma palabra intercalando mayúsculas y minúsculas

	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str){
		const length = str.length
		let translation = ''
		let capitalize = true
		for (let i = 0; i < length; i++){
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}

	if (str == reverse(str)) {
		return minMay(str)
	}

	return translation
}

console.log(traductor('programar')) //Program
console.log(traductor('zorro')) // zorrope
console.log(traductor('zarpar')) //zarparpe
console.log(traductor('abecedario')) //abece-dario
console.log(traductor('sometemos')) //SoMeTeMoS