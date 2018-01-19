let base =  5
let height = 7

const triangleArea = (base, height) => base * height / 2

console.log(`El área de un triángulo de base
${base} y altura ${height} es: ${triangleArea(base, height)}` )

/*Area círculo*/
let radio = 5

const circleArea = (radio) => Math.PI * Math.pow(radio,2)

console.log(`El área de un círculo de radio ${radio} es ${circleArea(radio)}`)