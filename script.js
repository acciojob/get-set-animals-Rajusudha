//complete this code
class Animal {
	constructor(species: string){
		this._species;
		
		
	}
	get makeSound(){
		return this._species: string;
	}
	set makeSound(){
		this._species: string=species: string;
	}
}

class Dog extends Animal {
	bark(){
		console.log(`${this.species: string}`)
	}
}

class Cat extends Animal {
	purr(){
		console.log(`${this.species: string}`)
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
