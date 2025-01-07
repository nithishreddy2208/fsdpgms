const temperatureConverter = {
    toCelsius(fahrenheit) {
      return ((fahrenheit - 32) * 5) / 9;
    },
    toFahrenheit(celsius) {
      return (celsius * 9) / 5 + 32;
    }
  };
  
  const conversionType = prompt("Enter 1 to convert Celsius to Fahrenheit or 2 for Fahrenheit to Celsius:");
  if (conversionType === "1") {
    const celsius = parseFloat(prompt("Enter the temperature in Celsius:"));
    console.log(`The temperature ${celsius}°C is ${temperatureConverter.toFahrenheit(celsius).toFixed(2)}°F`);
  } else if (conversionType === "2") {
    const fahrenheit = parseFloat(prompt("Enter the temperature in Fahrenheit:"));
    console.log(`The temperature ${fahrenheit}°F is ${temperatureConverter.toCelsius(fahrenheit).toFixed(2)}°C`);
  } else {
    console.log("Invalid option selected.");
  }