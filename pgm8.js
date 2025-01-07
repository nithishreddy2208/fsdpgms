function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  Car.prototype.getDetails = function() {
    return `${this.make} ${this.model}`;
  };
  
  const myCar = new Car("Toyota", "Camry");
  
  console.log(myCar._proto_ === Car.prototype);
  console.log(myCar.getDetails());
  
  Car.prototype.getMake = function() {
    return this.make;
  };
  
  console.log(myCar.getMake());
  console.log(Car.prototype);