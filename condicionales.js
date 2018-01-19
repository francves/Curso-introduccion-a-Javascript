const starWars8 = 'Star Wars: The last Jedi'
const pgStarWars8  = 13

const name1 = 'Fran'
const age1 = 24

const name2 = 'Chabela'
const age2 = 7

function canWatch(name, age, isWithAdult = false){
	if(age > pgStarWars8){
		alert(`${name} puede pasar a ver ${starWars8}`)
	}else if(isWithAdult){
		alert(`${name} puede pasar a ver ${starWars8}.
			Aunque su edad es ${age}, se encuentra acompañada/o por un adulto`)
	}else{
		alert(`${name} no puede ver ${starWars8}. 
			tiene ${age} años y necesita tener ${pgStarWars8}`)
	}
}

canWatch(name1, age1)
canWatch(name2, age2, true)