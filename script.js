//complete this code
class Animal {
	constructor(species){
		this._species;
		
		
	}
	get makeSound(){
		return this._species;
	}
	set makeSound(){
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
