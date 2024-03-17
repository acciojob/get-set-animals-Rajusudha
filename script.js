//complete this code
// class Animal {
// 	constructor(species: string){
// 		this._species;
		
		
// 	}
// 	get makeSound(){
// 		return this._species: string;
// 	}
// 	set makeSound(){
// 		this._species: string=species: string;
// 	}
// }

// class Dog extends Animal {
// 	bark(){
// 		console.log(`${this.species: string}`)
// 	}
// }

// class Cat extends Animal {
// 	purr(){
// 		console.log(`${this.species: string}`)
// 	}
}

// Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;






// Today

// Team Acciojob  to  You (direct message) 13:41
class Animal {
  constructor(species) {
    this._species = species;
  }
  get species() {
    return this._species;
  }
	 set species() {
     this._species=species;
  }
  makeSound() {
    console.log("The " + this.species + " makes a sound");
  }
}
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
// Messages addressed to "Meeting Group Chat" will also appear in the meeting group chat in Team Chat
