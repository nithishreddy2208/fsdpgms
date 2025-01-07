const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    getDetails: function() {
      return `${this.year} ${this.make} ${this.model}`;
    }
  };
  
  const electricCar = Object.create(car);
  electricCar.batteryCapacity = "75 kWh";
  electricCar.getBatteryInfo = function() {
    return `Battery Capacity: ${this.batteryCapacity}`;
  };
  
  const myElectricCar = Object.create(electricCar);
  myElectricCar.make = "Tesla";
  myElectricCar.model = "Model 3";
  myElectricCar.year = 2022;
  
  console.log(myElectricCar.getDetails());  
  console.log(myElectricCar.getBatteryInfo()); 