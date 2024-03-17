//complete this code
class Animal {
	constructor(species: string){
		this._species;
		
		
	}
	get species(){
		return this._species;
	}
	set species(){
		this._species=species;
	}
}

class Dog extends Animal {
	bark(){
		console.log(`${this.species}`)
	}
}

class Cat extends Animal {
	purr(){
		console.log(`${this.species}`)
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
