//example with heritance and TypeScript

//definition of the class animal (dad/base)
class animal{
    //properties of the animal
    name:string
    age:number

    //constructor to initialize the name and the age
    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    //method to make the animal emit a sound
    public emitSound(){
        console.log(`${this.name} is making a sound`)
    }

    //method to exhibit animal`s informations
    public exhibitInfo(): void{
        console.log(`
        Name: ${this.name}
        Age: ${this.age} years old`)
    }
}

//defining son class dog that inherits from animal
class dog extends animal{
    
    //specific property of the dog class
    private breed:string

    //constructor of the dog class
    constructor(name:string, age:number, breed:string){
        super(name, age)
        this.breed = breed
    }
    //overwrite the method emitSound from the animal class
    public emitSound():void{
        super.exhibitInfo()
        console.log(`Breed: ${this.breed}`)
    }
}

const myDog = new dog('Alfred', 1, 'puddle')

myDog.emitSound()