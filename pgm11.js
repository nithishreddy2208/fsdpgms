class Animal{
    speak(){
        console.log("Animal is speaking");
    }
}
class Dog extends Animal{
    speak(){
       console.log("Woof!");
    }
}

const myAnimal=new Animal();
myAnimal.speak();
const myDog=new Dog();
myDog.speak();