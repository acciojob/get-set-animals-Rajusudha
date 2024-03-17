//complete this code
class Animal {
	constructor(species){
		this._species;
		
		
	}
	get makeSound(){
		return this.makeSound;
	}
	set makeSound(){
		this.makeSound=makeSound;
	}
}

class Dog extends Animal {
	bark(){
		console.log(`${this.makeSound}`)
	}
}

class Cat extends Animal {
	purr(){
		console.log(`${this.makeSound}`)
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
